/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@chatify/eslint-config/base.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
