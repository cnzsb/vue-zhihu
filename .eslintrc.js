module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        'import/no-unresolved': 0,
        indent: ['error', 4],
        semi: ['error', 'never'],
        'object-curly-spacing': ['error', 'never'],
        'comma-dangle': ['error', 'only-multiline'],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
