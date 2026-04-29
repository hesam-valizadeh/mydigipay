module.exports = {
	preset: 'jest-preset-angular',
	setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
	testEnvironment: 'jsdom',

	transform: {
		'^.+\\.(ts|mjs|js|html)$': [
			'jest-preset-angular',
			{
				tsconfig: '<rootDir>/tsconfig.spec.json',
				stringifyContentPathRegex: '\\.(html|svg)$',
			},
		],
	},

	transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$|tslib|rxjs|@angular|zone\\.js)'],

	moduleNameMapper: {
		'@environment/(.*)': '<rootDir>/src/environments/$1',
	},

	moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],

	snapshotSerializers: [
		'jest-preset-angular/build/serializers/html-comment',
		'jest-preset-angular/build/serializers/no-ng-attributes',
		'jest-preset-angular/build/serializers/ng-snapshot',
	],

	coverageReporters: ['html', 'text', 'lcov'],

	collectCoverageFrom: [
		'src/app/**/*.ts',
		'!src/app/**/*.spec.ts',
		'!src/**/*.module.ts',
		'!src/main.ts',
		'!src/**/*.mock.ts',
	],
	coverageThreshold: {
		global: {
			branches: 70,
			functions: 75,
			lines: 80,
			statements: 80,
		},
	},
};
