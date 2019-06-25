module.exports = {
    rules: {
        // disallow else after a return in an if
        // https://eslint.org/docs/rules/no-else-return
        // 'no-else-return': ['error', { allowElseIf: false }],
        'no-else-return': 'off',

        // https://eslint.org/docs/rules/no-param-reassign
        //'no-param-reassign': ['error', {
        //    props: true,
        //    ignorePropertyModificationsFor: [
        //        'acc', // for reduce accumulators
        //        'accumulator', // for reduce accumulators
        //        'e', // for e.returnvalue
        //        'ctx', // for Koa routing
        //        'context',
        //        'req', // for Express requests
        //        'request', // for Express requests
        //        'res', // for Express responses
        //        'response', // for Express responses
        //        '$scope', // for Angular 1 scopes
        //        'staticContext', // for ReactRouter context
        //    ]
        //}],
        'no-param-reassign': 'off',
    }
};
