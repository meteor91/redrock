module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: [
        'react',
    ],
    // ignorePatterns: ['**/*.stories.tsx'],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
        // '@typescript-eslint/strict-boolean-expressions': false,
        // semi: ['error', 'always'],
        'react/display-name': 'off',
        curly: 'error',
        semi: 'off',
        '@typescript-eslint/semi': [2, 'always'],
        '@typescript-eslint/member-delimiter-style': [
            'warn',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/strict-boolean-expressions': 0,
    },
};
