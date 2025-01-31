module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-native', 'prettier'],
  settings: {
    'import/resolver': {
      'babel-plugin-module-resolver': {
        alias: {
          '@': './src', // Match the alias in babel.config.js
        },
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': 'warn',
    'react/prop-types': 'off',
  },
};
