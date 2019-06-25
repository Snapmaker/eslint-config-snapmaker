module.exports = {
    extends: [
        'eslint-config-airbnb',
        './rules/node',
        './rules/es6',
        './rules/style',
        './rules/best-practices',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2019, // 10
        sourceType: 'module'
    },
    rules: {
        // import
        // "import/no-extraneous-dependencies": ["error", { "devDependencies": false }],
        "import/no-extraneous-dependencies": 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        // we allow single export from a module, sometimes function as default export is not suitable
        'import/prefer-default-export': 'off',

        // react
        // destructuring assign is not enforced
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',

        // indent
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],

        // TODO
        'react/forbid-prop-types': 'off',
        'react/require-default-props': 'off',

        'react/jsx-one-expression-per-line': 'off',
    }
};
