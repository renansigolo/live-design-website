/** @type {import('prettier').Config} */
module.exports = {
  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'go-template',
        printWidth: 120,
        singleQuote: false,
      },
    },
    {
      files: ['*.js'],
      options: {
        semi: false,
        singleQuote: true,
      },
    },
  ],
}
