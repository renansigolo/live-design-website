/** @type {import('prettier').Config} */
module.exports = {
  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'go-template',
        printWidth: 120,
      },
    },
    {
      files: ['*.js'],
      options: {
        singleQuote: true,
      },
    },
  ],
};
