module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    extends: [
        'next',
        'prettier',
        'next/core-web-vitals',
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    env: {
        "browser": true,
        "es2021": true,
        "node": true
    },
    plugins: ["@typescript-eslint"],
    globals: {
        "process": "readonly"
    },
    rules: {
        "no-unused-vars": "error",
        "prefer-const": "error",
        "no-unused-expressions": "error",
        "no-console": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "type"]
    },
};
