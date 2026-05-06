module.exports = {
	extends: ['stylelint-config-standard-scss'],
	plugins: ['stylelint-scss'],
	rules: {
		'scss/at-rule-no-unknown': true,
		'scss/dollar-variable-no-missing-interpolation': true,
		'scss/operator-no-unspaced': true,
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignore: ['consecutive-duplicates-with-different-values'],
			},
		],
		'at-rule-no-unknown': null,
		'selector-class-pattern': null,
		'declaration-no-important': null,
		'max-nesting-depth': 7,
		'color-hex-length': 'short',
		'color-named': 'never',
		'unit-no-unknown': true,
		'property-no-unknown': true,
		'property-no-deprecated': null,
		'selector-pseudo-class-no-unknown': null,
		'selector-pseudo-element-no-unknown': null,
		'font-family-no-missing-generic-family-keyword': null,

		'block-no-empty': true,
		'color-named': 'never',
		'scss/no-global-function-names': true,
		'scss/comment-no-empty': true,
	},
	overrides: [
		{
			files: ['**/*.scss'],
			customSyntax: 'postcss-scss',
		},
	],
};
