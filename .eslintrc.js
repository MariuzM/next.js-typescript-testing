module.exports = {
  root: true,

  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],

  plugins: ['jsx-a11y'],

  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
  },
}
