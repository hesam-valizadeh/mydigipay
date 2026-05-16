module.exports = {
'**/*.{scss,css}': () => {
    return [
      'stylelint --fix --cache --allow-empty-input "src/**/*.{scss,css}"',
      'stylelint --allow-empty-input "src/**/*.{scss,css}"'
    ];
	},
	'**/*.{html,json,md,yml}': ['prettier --write', 'prettier --check'],
	'**/*.{ts,tsx}': ['eslint --fix --cache ', 'eslint'],
};
