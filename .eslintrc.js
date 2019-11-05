module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
    'prettier/prettier': 'warn',
    'no-undef': 'warn',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'react-hooks/rules-of-hooks' : 'error',
    'react-hooks/exhaustive-deps' : 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'comma-dangle': 'off',
    'arrow-body-style' : 'off',
    'import/prefer-default-export': 'warn'
  },
};
