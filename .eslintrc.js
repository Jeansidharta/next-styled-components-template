// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WARN = `warn`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ERROR = `error`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OFF = `off`;

module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: ['eslint:recommended', `plugin:@typescript-eslint/recommended`, 'prettier'],
	parser: `@typescript-eslint/parser`,
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 12,
		sourceType: `module`,
	},
	plugins: [`react`, `@typescript-eslint`, `jsx-a11y`],
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': [OFF],
		'@typescript-eslint/no-unused-vars': [
			WARN,
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: true, argsIgnorePattern: '^_' },
		],
		'@typescript-eslint/no-non-null-assertion': [OFF],
		'@typescript-eslint/no-empty-function': [OFF],
	},
};
