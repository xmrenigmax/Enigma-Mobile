/**
 * @file .eslintrc.js
 * @description Strict linting rules for Enigma Logicistics.
 */
module.exports = {
  extends: ['expo', 'plugin:jsdoc/recommended'],
  rules: {
    'id-length': ['error', { 'min': 3, 'exceptions': ['id', 'px', 'py'] }], // No 'e' or 'conv'
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'jsdoc/require-jsdoc': ['error', {
      'require': { 'FunctionDeclaration': true, 'ArrowFunctionExpression': true }
    }]
  }
};