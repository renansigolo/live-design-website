module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  "ignorePatterns": ["**/*.min.*", ],
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "no-undef": "off",
    "allowArrowFunctions": "off",
  },
}
