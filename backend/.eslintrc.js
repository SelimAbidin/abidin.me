module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    describe: 'readonly',
    before: 'readonly',
    it: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "indent": ["error", 4],
    "comma-dangle": [
      "error", { "arrays": "never" }
    ],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  }
}
