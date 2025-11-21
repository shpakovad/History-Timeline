module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'quotes': ['error', 'double'],
        'semi': ['error', 'always'],
        'indent': ['error', 2],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error'
    }
};