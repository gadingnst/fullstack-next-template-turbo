module.exports = {
  'import/no-default-export': 'off',
  'import/no-extraneous-dependencies': 'off',
  'eslint-comments/require-description': 'off',
  'unicorn/filename-case': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  'semi': ['error', 'always'],
  'indent': ['error', 2, { 'SwitchCase': 1 }],
  'comma-dangle': ['error', 'never'],
  'comma-spacing': ['error', { 'before': false, 'after': true }],
  'space-before-blocks': 'error',
  'no-multiple-empty-lines': ['error', { 'max': 1 }],
  'object-curly-spacing': ['error', 'always'],
  'array-bracket-spacing': 'error',
  'keyword-spacing': 'error',
  'arrow-spacing': 'error',
  'space-infix-ops': 'error',
  'no-console': 'warn',
  'no-useless-catch': 'off',
  'jsx-quotes': ['error', 'prefer-double'],
  'space-in-parens': ['error', 'never'],
  'space-before-function-paren': ['error', 'never'],
  'react/jsx-wrap-multilines': ['error', {
    'declaration': 'parens-new-line',
    'assignment': 'parens-new-line',
    'return': 'parens-new-line',
    'arrow': 'parens-new-line',
    'condition': 'parens-new-line',
    'logical': 'ignore',
    'prop': 'ignore'
  }],

  /** @see https://medium.com/weekly-webtips/how-to-sort-imports-like-a-pro-in-typescript-4ee8afd7258a */
  'import/no-unresolved': 'off',
  'import/order': [
    'error',
    {
      'groups': [
        'builtin',
        'external',
        'internal',
        ['sibling', 'parent'],
        'index',
        'unknown'
      ],
      'newlines-between': 'always',
      'alphabetize': {
        'order': 'asc',
        'caseInsensitive': true
      }
    }
  ],
  /** */

  '@typescript-eslint/semi': 'error',
  '@typescript-eslint/type-annotation-spacing': 'error',
  '@typescript-eslint/space-before-blocks': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
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
  ],
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-argument': 'off'
  // '@typescript-eslint/naming-convention': [
  //   'error',
  //   {
  //     'selector': 'interface',
  //     'format': ['PascalCase'],
  //     'custom': {
  //       'regex': '^I[A-Z]',
  //       'match': true
  //     }
  //   }
  // ]
}
