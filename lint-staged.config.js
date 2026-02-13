module.exports = {
  '**/*.{ts,tsx}': 'eslint --fix',
  '**/*.{scss,css}': 'stylelint --fix',
  '**/*.html': 'prettier --write',
  '**/*.{json,md,yml}': 'prettier --write',
};
