/** @type {import('lint-staged').Configuration} */
export default {
  '*.{ts,tsx}': ['oxlint', 'oxfmt --write'],
  '*.css': ['stylelint --cache', 'oxfmt --write'],
};
