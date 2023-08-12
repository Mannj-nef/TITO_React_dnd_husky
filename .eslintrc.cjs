module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:storybook/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '.storybook/', 'src/stories/', 'node_modules/', 'dist/', '.husy/'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname
  },

  project: ['./tsconfig.json'],

  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/array-type': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
  }
}
