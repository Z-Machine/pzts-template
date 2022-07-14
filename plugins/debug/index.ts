import path from "path";
import fs from "fs";
import ts, { factory } from "typescript";
import chalk from "chalk";
import { transformerDebug, transformerDiagnostic } from "./util";
import { transformToIIFEDebugPrint, transformToInlineDebugPrint } from "./dbg";
import { transformGit } from "./git";
import { transformTime } from "./time";
import { transformError, transfromPrint } from "./print";

/**
 * This plugin handles a bunch of precompile related functionality.
 * rbxts-transform-debug was a massive inspiration.
 */

const sourceText = fs.readFileSync(path.join(__dirname, "types.d.ts"), "utf-8");
function isModule(sourceFile: ts.SourceFile) {
    return sourceFile.text === sourceText;
}

function isModuleImportExpression(
    node: ts.Node,
    program: ts.Program
): node is ts.ImportDeclaration {
    if (!ts.isImportDeclaration(node)) return false;

    if (!node.importClause) return false;

    const namedBinding = node.importClause.namedBindings;
    if (!node.importClause.name && !namedBinding) return false;

    const importSymbol = program.getTypeChecker().getSymbolAtLocation(node.moduleSpecifier);

    if (
        !importSymbol ||
        !importSymbol.valueDeclaration ||
        !isModule(importSymbol.valueDeclaration.getSourceFile())
    )
        return false;

    return true;
}

export interface DebugOptions {
    enabled: boolean;
    verbose?: boolean;
}

const DEFAULTS: DebugOptions = {
    enabled: true,
};

function visitNodeAndChildren(
    node: ts.SourceFile,
    program: ts.Program,
    context: ts.TransformationContext,
    options: DebugOptions
): ts.SourceFile;
function visitNodeAndChildren(
    node: ts.Node,
    program: ts.Program,
    context: ts.TransformationContext,
    options: DebugOptions
): ts.Node | undefined;
function visitNodeAndChildren(
    node: ts.Node,
    program: ts.Program,
    context: ts.TransformationContext,
    options: DebugOptions
): ts.Node | ts.Node[] | undefined {
    return ts.visitEachChild(
        visitNode(node, program, options),
        (childNode) => visitNodeAndChildren(childNode, program, context, options),
        context
    );
}

const MacroFunctionName = {
    dbg: `$dbg`,
    print: `$print`,
    error: `$error`,
    git: `$git`,
    package: `$package`,
    time: `$compileTime`,
} as const;

function handleDebugCallExpression(
    node: ts.CallExpression,
    functionName: string,
    program: ts.Program,
    { enabled, verbose }: DebugOptions
) {
    if (verbose) {
        console.log(transformerDebug(`Handling call to macro ${chalk.yellow(functionName)}`, node));
    }

    switch (functionName) {
        case MacroFunctionName.dbg: {
            const [expression, customHandler] = node.arguments;
            if (expression === undefined)
                throw transformerDiagnostic(
                    `function ${chalk.yellow(functionName)} is missing expression.`
                );

            if (ts.isExpressionStatement(node.parent) && customHandler === undefined) {
                return enabled
                    ? transformToInlineDebugPrint(expression)
                    : ts.isCallExpression(expression)
                    ? expression
                    : factory.createVoidExpression(factory.createIdentifier(`undefined`));
            }
            return enabled
                ? transformToIIFEDebugPrint(expression, customHandler, program)
                : expression;
        }
        case MacroFunctionName.git: {
            return transformGit(node);
        }
        case MacroFunctionName.print: {
            return enabled
                ? transfromPrint(node)
                : factory.createVoidExpression(factory.createIdentifier(`undefined`));
        }
        case MacroFunctionName.error: {
            return enabled
                ? transformError(node)
                : factory.createVoidExpression(factory.createIdentifier(`undefined`));
        }
        case MacroFunctionName.time: {
            return transformTime(node);
        }
        default:
            throw transformerDiagnostic(
                `function ${chalk.yellow(functionName)} cannot be handled currently.`
            );
    }
}

function visitCallExpression(node: ts.CallExpression, program: ts.Program, options: DebugOptions) {
    const typeChecker = program.getTypeChecker();
    const signature = typeChecker.getResolvedSignature(node);
    if (!signature) return node;

    const { declaration } = signature;
    if (!declaration || ts.isJSDocSignature(declaration) || !isModule(declaration.getSourceFile()))
        return node;

    const functionName = declaration.name && declaration.name.getText();
    if (!functionName) return node;

    return handleDebugCallExpression(node, functionName, program, options);
}

function visitNode(node: ts.SourceFile, program: ts.Program, options: DebugOptions): ts.SourceFile;
function visitNode(node: ts.Node, program: ts.Program, options: DebugOptions): ts.Node | undefined;
function visitNode(
    node: ts.Node,
    program: ts.Program,
    options: DebugOptions
): ts.Node | ts.Node[] | undefined {
    if (isModuleImportExpression(node, program)) {
        const { importClause } = node;

        if (importClause !== undefined && importClause.isTypeOnly) return node;

        if (importClause !== undefined)
            return factory.updateImportDeclaration(
                node,
                undefined,
                undefined,
                factory.updateImportClause(
                    importClause,
                    true,
                    importClause.name,
                    importClause.namedBindings
                ),
                node.moduleSpecifier,
                undefined
            );
    }

    if (ts.isCallExpression(node)) return visitCallExpression(node, program, options);

    return node;
}

export default function transform(program: ts.Program, options: DebugOptions) {
    options = { ...DEFAULTS, ...options };

    if (options.verbose) {
        console.log(`Verbose enabled: ${chalk.cyan(options.verbose)}`);
        console.log(`Macros enabled: ${chalk.cyan(options.enabled)}`);
    }

    return (context: ts.TransformationContext) => (sourceFile: ts.SourceFile) => {
        return visitNodeAndChildren(sourceFile, program, context, options);
    };
}
