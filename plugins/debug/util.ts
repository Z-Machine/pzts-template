import chalk from "chalk";
import path from "path";
import ts, { factory } from "typescript";

export type ValueOf<T> = T[keyof T];

/**
 * Creates a debug prefix string literal with the expression information of the node
 * `[<filePath>:<lineNumber>] <expressionText> =`
 */
export function createExpressionDebugPrefixLiteral(node: ts.Node): ts.StringLiteral {
    const sourceFile = node.getSourceFile();
    const linePos = sourceFile.getLineAndCharacterOfPosition(node.getStart());
    const relativePath = path.relative(process.cwd(), node.getSourceFile().fileName).replace(/\\/g, "/");
    return factory.createStringLiteral(`[${relativePath}:${linePos.line + 1}] ${node.getText()} =`, true);
}

export function getDebugInfo(node: ts.Node) {
    const sourceFile = node.getSourceFile();
    const linePos = sourceFile.getLineAndCharacterOfPosition(node.getStart());
    const relativePath = path.relative(process.cwd(), node.getSourceFile().fileName).replace(/\\/g, "/");
    return {
        sourceFile,
        linePos: linePos.line + 1,
        lineChar: linePos.character + 1,
        relativePath,
    };
}

export function transformerDebug(message: string, node?: ts.Node): string {
    if (node) {
        const info = getDebugInfo(node);
        const str = `${chalk.gray("[debug]")} ${chalk.green("macro debug")} ${chalk.cyan(
            info.relativePath
        )}:${chalk.yellow(info.linePos)} - ${message}\n${chalk.italic(node.getText())}`;
        return str;
    }
    return `${chalk.gray("[debug]")} ${chalk.green("macro debug")} - ${message}`;
}

export function transformerInfo(message: string, node?: ts.Node): string {
    if (node) {
        const str = `${chalk.gray("[debug]")} ${chalk.cyan("macro info")} - ${message}\n${chalk.italic(
            node.getText()
        )}`;
        return str;
    }
    return `${chalk.gray("[debug]")} ${chalk.cyan("macro info")} ${message}`;
}

export function transformerWarning(message: string, node?: ts.Node, suggestion?: string): string {
    if (node) {
        const info = getDebugInfo(node);
        let str = `${chalk.gray("[debug]")} ${chalk.yellow("macro warning")} ${chalk.cyan(
            info.relativePath
        )}:${chalk.yellow(info.linePos)} - ${message}\n${chalk.italic(node.getText())}`;

        if (suggestion !== "") {
            str += `\n* ${chalk.yellow(suggestion)}`;
        }

        return str;
    }
    return `${chalk.gray("[debug]")} ${chalk.yellow("macro warning")} - ${message}`;
}

export function transformerDiagnostic(message: string, node?: ts.Node, suggestion?: string): string {
    if (node) {
        const info = getDebugInfo(node);
        let str = `${chalk.gray("[debug]")} ${chalk.red("macro error")} ${chalk.cyan(info.relativePath)}:${chalk.yellow(
            info.linePos
        )} - ${message}\n${chalk.italic(node.getText())}`;

        if (suggestion !== "") {
            str += `\n* ${chalk.yellow(suggestion)}`;
        }

        return str;
    }
    return `${chalk.gray("[debug]")} ${chalk.red("macro error")} - ${message}`;
}

/**
 * Creates a debug prefix string literal
 * `[<filePath>:<lineNumber>]`
 */
export function createDebugPrefixLiteral(node: ts.Node): ts.StringLiteral {
    const sourceFile = node.getSourceFile();
    const linePos = sourceFile.getLineAndCharacterOfPosition(node.getStart());
    const relativePath = path.relative(process.cwd(), node.getSourceFile().fileName).replace(/\\/g, "/");
    return factory.createStringLiteral(`[${relativePath}:${linePos.line + 1}]`, true);
}
