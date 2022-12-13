/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  rules: {
    'max-nesting-depth': null,
    'no-descending-specificity': null,
  },
}
