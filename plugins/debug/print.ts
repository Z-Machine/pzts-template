import ts, { factory } from "typescript";
import { createDebugPrefixLiteral } from "./util";

export function transfromPrint(node: ts.CallExpression): ts.CallExpression {
    return factory.updateCallExpression(node, factory.createIdentifier(`print`), undefined, [
        createDebugPrefixLiteral(node),
        ...node.arguments,
    ]);
}

export function transformLine(node: ts.CallExpression): ts.StringLiteral {
    return createDebugPrefixLiteral(node);
}
