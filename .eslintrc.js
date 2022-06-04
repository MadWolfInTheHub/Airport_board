module.exports = {
  env: {
    es6: true,
    node: true,
    browser:true,
    jest: true,
  },
  extends: ['eslint:recomended', 'plugin:react/redux'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parseOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    souceType: 'module',
  },
  plugins: ['react'],
  rules: {},
}