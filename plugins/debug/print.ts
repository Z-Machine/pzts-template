import ts, { factory } from "typescript";
import { createDebugPrefixLiteral } from "./util";

export function transfromPrint(node: ts.CallExpression): ts.CallExpression {
    return factory.updateCallExpression(node, factory.createIdentifier(`print`), undefined, [
        createDebugPrefixLiteral(node),
        ...node.arguments,
    ]);
}

export function transformError(node: ts.CallExpression): ts.CallExpression {
    return factory.updateCallExpression(node, factory.createIdentifier(`error`), undefined, [
        createDebugPrefixLiteral(node),
        ...node.arguments,
    ]);
}
