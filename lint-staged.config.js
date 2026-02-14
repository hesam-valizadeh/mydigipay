module.exports = {
  '**/*.{ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.{scss,css}': ['stylelint --fix', 'stylelint'],
  '**/*.html': ['prettier --write', 'prettier --check'],
  '**/*.{json,md,yml}': ['prettier --write', 'prettier --check'],
};
