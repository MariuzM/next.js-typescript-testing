module.exports = {
  // files: ['/**/*.ts', '/**/*.tsx'],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // ecmaVersion: 2020,
    // project: './tsconfig.json',
    ecmaFeatures: { jsx: true },
  },
  extends: [
    // 'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
    // Prettier plugin and recommended rules
    // 'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'react/display-name': 'off',
  },
}