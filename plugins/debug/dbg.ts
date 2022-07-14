import ts, { factory } from "typescript";
import { createDebugPrefixLiteral, getDebugInfo, transformerDiagnostic } from "./util";

function createPrintCallExpression(argumentsArray: ts.Expression[]) {
    return factory.createCallExpression(
        factory.createIdentifier("print"),
        undefined,
        argumentsArray
    );
}

export function transformToInlineDebugPrint(node: ts.Expression): ts.Expression {
    return createPrintCallExpression([createDebugPrefixLiteral(node), node]);
}

/**
 * Creates an IIFE debug expression.
 * @param id The identifier
 * @param argument The expression
 */
export function createIIFEBlock(id: ts.Identifier, argument: ts.Expression): ts.Block {
    return factory.createBlock(
        [
            factory.createExpressionStatement(
                createPrintCallExpression([createDebugPrefixLiteral(argument), id])
            ),
            factory.createReturnStatement(id),
        ],
        true
    );
}

/**
 * Creates an object with debug info about the specified expression.
 * @param expression The expression
 */
export function createDebugObject(expression: ts.Expression): ts.ObjectLiteralExpression {
    const info = getDebugInfo(expression);
    return factory.createObjectLiteralExpression(
        [
            factory.createPropertyAssignment(
                `file`,
                factory.createStringLiteral(info.relativePath)
            ),
            factory.createPropertyAssignment(
                `lineNumber`,
                factory.createNumericLiteral(info.linePos)
            ),
            factory.createPropertyAssignment(
                `character`,
                factory.createNumericLiteral(info.lineChar)
            ),
            factory.createPropertyAssignment(
                `rawText`,
                factory.createStringLiteral(expression.getText())
            ),
        ],
        true
    );
}

export function createCustomIIFEBlock(
    expression: ts.Expression,
    body: ts.ConciseBody,
    sourceId: ts.Identifier,
    debugInfoParam?: ts.ParameterDeclaration
): ts.Block {
    if (ts.isBlock(body)) {
        const newBody = [...body.statements];

        if (debugInfoParam !== undefined) {
            newBody.unshift(
                factory.createVariableStatement(
                    undefined,
                    factory.createVariableDeclarationList(
                        [
                            factory.createVariableDeclaration(
                                factory.createIdentifier(debugInfoParam.name.getText()),
                                undefined,
                                undefined,
                                createDebugObject(expression)
                            ),
                        ],
                        ts.NodeFlags.Const
                    )
                )
            );
        }

        newBody.push(factory.createReturnStatement(sourceId));
        return factory.createBlock(newBody);
    }

    const id = factory.createIdentifier(`value`);
    return createIIFEBlock(id, expression);
}

export function transformToIIFEDebugPrint(
    expression: ts.Expression,
    customHandler: ts.Expression | undefined,
    program: ts.Program
): ts.Expression {
    if (customHandler) {
        if (ts.isArrowFunction(customHandler) || ts.isFunctionExpression(customHandler)) {
            const {
                body,
                parameters: [sourceParam, debugInfo],
            } = customHandler;
            const valueId = factory.createIdentifier(sourceParam!.name.getText());

            const checker = program.getTypeChecker();
            const methodSignature = checker.getSignatureFromDeclaration(customHandler);
            if (methodSignature) {
                const returnType = methodSignature.getReturnType();
                const returnSymbol = returnType.getSymbol();
                if (returnSymbol) {
                    throw transformerDiagnostic(
                        `argument 'customHandler' should return void, got ${returnSymbol.getName()}`,
                        customHandler
                    );
                }

                const typeString = checker.typeToString(returnType);
                if (typeString !== "void") {
                    throw transformerDiagnostic(
                        `argument 'customHandler' should return void, got ${typeString}`,
                        customHandler
                    );
                }
            }

            return factory.createCallExpression(
                factory.createParenthesizedExpression(
                    factory.createArrowFunction(
                        undefined,
                        undefined,
                        [
                            factory.createParameterDeclaration(
                                undefined,
                                undefined,
                                undefined,
                                valueId
                            ),
                        ],
                        undefined,
                        undefined,
                        createCustomIIFEBlock(expression, body, valueId, debugInfo)
                    )
                ),
                undefined,
                [expression]
            );
        }

        if (ts.isIdentifier(customHandler) || ts.isPropertyAccessExpression(customHandler)) {
            const id = factory.createUniqueName(`value`);
            const tmp = factory.createUniqueName(`debugInfo`);

            return factory.createCallExpression(
                factory.createParenthesizedExpression(
                    factory.createArrowFunction(
                        undefined,
                        undefined,
                        [factory.createParameterDeclaration(undefined, undefined, undefined, id)],
                        undefined,
                        undefined,
                        factory.createBlock([
                            factory.createVariableStatement(
                                undefined,
                                factory.createVariableDeclarationList(
                                    [
                                        factory.createVariableDeclaration(
                                            tmp,
                                            undefined,
                                            undefined,
                                            createDebugObject(expression)
                                        ),
                                    ],
                                    ts.NodeFlags.Const
                                )
                            ),
                            factory.createExpressionStatement(
                                factory.createCallExpression(customHandler, undefined, [id, tmp])
                            ),
                            factory.createReturnStatement(id),
                        ])
                    )
                ),
                undefined,
                [expression]
            );
        }

        throw transformerDiagnostic(
            `${ts.SyntaxKind[customHandler.kind]} not supported in custom $dbg handler.`,
            customHandler
        );
    }

    const id = factory.createUniqueName(`value`);
    return factory.createCallExpression(
        factory.createParenthesizedExpression(
            factory.createArrowFunction(
                undefined,
                undefined,
                [factory.createParameterDeclaration(undefined, undefined, undefined, id)],
                undefined,
                undefined,
                createIIFEBlock(id, expression)
            )
        ),
        undefined,
        [expression]
    );
}
