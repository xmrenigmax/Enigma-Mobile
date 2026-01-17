module.exports = {
  root: true,
  extends: [
    'expo',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsdoc', 'prefer-arrow'],
  rules: {
    // 1. Enforce expanded naming conventions (User request)
    'id-length': ['error', { min: 2, exceptions: ['i', 'j', 'x', 'y'] }],

    // 2. Strict JSDoc for all functions
    'jsdoc/require-jsdoc': ['warn', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: true,
      }
    }],

    // 3. Prevent abbreviated variables
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    // 4. Require semicolons and 2-space indentation
    'semi': ['error', 'always'],
    'indent': ['error', 2, { SwitchCase: 1 }],

    // 5. Stylistic rules for cleaner logicistics code
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],

    // 6. NativeWind/React Native specific
    'react-native/no-inline-styles': 'error',
  },
};