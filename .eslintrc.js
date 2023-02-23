// module.exports = {
//     // parser: 'typescript-eslint-parser',
//     // plugins: ['typescript'],

//     rules: {
//         'no-console': ['error', { allow: ['warn', 'error'] }],
//     },
// }
module.exports = {
    parser: '@typescript-eslint/parser', //定义ESLint的解析器
    extends: ['plugin:@typescript-eslint/recommended'], //定义文件继承的子规范
    plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
    env: {
        //指定代码的运行环境
        browser: true,
        node: true,
    },
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            extends: ['plugin:@typescript-eslint/recommended'],
            // rules: {
            //     'no-console': ['error', { allow: ['warn', 'error'] }],
            // },
        },
    ],
    rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
    },
}
