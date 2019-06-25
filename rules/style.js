module.exports = {
    rules: {
        // https://eslint.org/docs/rules/class-methods-use-this
        'class-methods-use-this': 'off',

        // disallows trailing commas
        'comma-dangle': ['error', 'never'],

        'max-len': ['warn', 160, 4, {
            'ignoreComments': false,
            'ignoreUrls': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
            'ignoreRegExpLiterals': true
        }],

        'no-continue': 'off',

        // https://eslint.org/docs/rules/no-underscore-dangle
        // TODO: remove this
        'no-underscore-dangle': 'off',

        // https://eslint.org/docs/rules/no-mixed-operators
        // we allow mixed operators since operator priority is there
        'no-mixed-operators': 'off',

        // disallow use of unary operators, ++ and --
        // https://eslint.org/docs/rules/no-plusplus
        'no-plusplus': 'off',

        // disallow usage of expressions in statement position
        // https://eslint.org/docs/rules/no-unused-expressions
        'no-unused-expressions': ['error', {
            'allowShortCircuit': true
        }],

        // disallow specified syntax
        // https://eslint.org/docs/rules/no-restricted-syntax
        // TODO: disallow ForOfStatement too?
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the     resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],

        // enforce line breaks between braces
        // https://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': 'off',

        // variables can be declared together
        'one-var': 'off',
        'one-var-declaration-per-line': 'off',

        // disallows quotes around object literal property names that are not strictly required
        // TODO: warn
        'quote-props': ['off', 'as-needed'],
    }
};
