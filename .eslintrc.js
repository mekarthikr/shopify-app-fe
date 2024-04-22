module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'love',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    curly: 'error',
    '@typescript-eslint/no-magic-numbers': ['error'],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/order': [
      'error',
      {
        groups: ['external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@app/**',
            group: 'internal',
            position: 'before',
          },
        ],
        warnOnUnassignedImports: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'error',
    'react/no-array-index-key': 'error',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
  overrides: [],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
