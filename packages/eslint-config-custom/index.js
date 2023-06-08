module.exports = {
  extends: [
    'eslint:recommended',
    'turbo',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'semi': ['error', 'always'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'comma-dangle': ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': 'error',
    'keyword-spacing': 'error',
    'arrow-spacing': 'error',
    'space-infix-ops': 'error',
    'no-console': 'warn',
    'no-useless-catch': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'space-before-function-paren': ['error', 'never'],
    'no-mixed-spaces-and-tabs': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/space-before-blocks': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'varsIgnorePattern': '^_', 'argsIgnorePattern': '^_'  }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': true
      },
      'multilineDetection': 'brackets'
    }],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true
      }
    ]
  }
};
