module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/strongly-recommended', '@vue/standard'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 0,
    'linebreak-style': [0, 'error', 'windows']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
