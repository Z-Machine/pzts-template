module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    extends: [
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "prettier",
    ],
    plugins: ["prettier", "@typescript-eslint"],
    parserOptions: {
        jsx: true,
        useJSXTextNode: true,
        ecmaVersion: 2020,
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: "./src/tsconfig.build.json",
    },
    rules: {
        // Prettier
        "prettier/prettier": [
            "error",
            {
                singleQuote: false,
                semi: true,
                trailingComa: "es6",
                printWidth: 120,
                tabWidth: 4,
                endOfLine: "lf",
                arrowParens: "always",
                bracketSpacing: true,
            },
        ],
        // TypeScript
        "@typescript-eslint/no-extra-parens": ["error"],
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/strict-boolean-expressions": ["error", { allowString: false, allowNumber: false }],
        "@typescript-eslint/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        "@typescript-eslint/member-ordering": 2,
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: "variable",
                format: ["camelCase", "PascalCase", "UPPER_CASE"],
                leadingUnderscore: "allow",
            },
            {
                selector: "function",
                format: ["camelCase", "PascalCase"],
                leadingUnderscore: "allow",
            },
            {
                selector: "typeLike",
                format: ["PascalCase"],
            },
        ],
        // TSTL compat
        "@typescript-eslint/no-invalid-void-type": [
            "warn",
            {
                allowAsThisParameter: true,
            },
        ],
        "no-underscore-dangle": [
            "warn",
            {
                allow: ["__add", "__sub", "__mul", "__div", "__unm", "__len"],
                allowAfterThis: false,
                allowAfterSuper: false,
                enforceInMethodNames: true,
            },
        ],
        // eslint
        eqeqeq: ["error", "always", { null: "never" }],
        "no-restricted-globals": 0,
        "no-extra-parens": 0,
        "no-undef": 0,
        "no-unused-vars": 0,
        "no-undefined": 0,
        "no-console": 2,
        "no-param-reassign": 0,
    },
};
