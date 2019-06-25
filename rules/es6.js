module.exports = {
    rules: {
        // https://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': 'off',

        // https://eslint.org/docs/rules/arrow-parens
        'arrow-parens': 'off',

        // https://eslint.org/docs/rules/no-useless-rename
        'no-useless-rename': ['error', {
            ignoreDestructuring: false,
            ignoreImport: true,
            ignoreExport: false,
        }],

        'object-shorthand': 'off',

        // https://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': 'off',
    }
};
