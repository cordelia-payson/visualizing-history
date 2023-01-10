module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    indent: ['error', 2],
    'linebreak-style': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'no-unused-vars': ['off'],
    'import/extensions': ['off'],
    'no-undef': 'off',
    'react/jsx-no-bind': 'off',
    'react/no-array-index-key': 'off',
  },
};
