module.exports = {
	'**/*.{ts,tsx}': ['eslint --fix --cache ', 'eslint'],
	'**/*.{scss,css}': ['stylelint --fix --cache', 'stylelint'],
	'**/*.{html,json,md,yml}': ['prettier --write', 'prettier --check'],
};
