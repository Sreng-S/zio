module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 0,
    'no-tabs': 0,
    'eol-last': 'off',
    'generator-star-spacing': 0,
    'import/first': 'error',
    'import/imports-first': [
        'off',
        'absolute-first'
    ],
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'no-unused-vars': [
        'error',
        {
            'caughtErrors': 'none'
        }
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
