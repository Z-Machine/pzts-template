import ts, { factory } from "typescript";

export default function transformTime(expression: ts.CallExpression): ts.Expression {
    let typeName = `UnixTimestamp`;

    const [kindName] = expression.arguments;
    if (kindName && ts.isStringLiteral(kindName)) {
        typeName = kindName.text;
    }

    const date = new Date();

    switch (typeName) {
        case `DateTime`: {
            return factory.createNonNullExpression(
                factory.createCallExpression(
                    factory.createPropertyAccessExpression(factory.createIdentifier(`DateTime`), `fromIsoDate`),
                    undefined,
                    [factory.createStringLiteral(date.toISOString())]
                )
            );
        }
        case `UnixTimestamp`: {
            return factory.createNumericLiteral(Math.floor(date.valueOf() / 1000));
        }
        case `UnixTimestampMillis`: {
            return factory.createNumericLiteral(date.valueOf());
        }
        case `ISO-8601`: {
            return factory.createStringLiteral(date.toISOString());
        }
        default: {
            throw `Invalid input.`;
        }
    }
}
