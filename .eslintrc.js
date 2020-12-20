module.exports = {
  extends: 'hackreactor',
  rules: {
    // Rules here will override the 'hackreactor' configuration
    // http://eslint.org/docs/rules/
  },
  'overrides': [
    {
      'files': ['*.index.html'], // Or *.test.js
      'rules': {
        'require-jsdoc': 'off'
      }
    }
  ],
};