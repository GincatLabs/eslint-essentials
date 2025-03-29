import type { Linter } from 'eslint';

export const tsRules: Linter.RulesRecord = {
	'import/no-extraneous-dependencies': [
		'error',
		{
			devDependencies: [
				'**/*.test.{mjs,cjs,js,mts,ts}',
				'**/*.stories.{mjs,cjs,js,mts,ts}',
				'storybook/**/*.{mjs,cjs,js,mts,ts}',
				'scripts/**/*.{mjs,cjs,js,mts,ts}',
				'mocks/**/*.{mjs,cjs,js,mts,ts}',
			],
		},
	],
	'@typescript-eslint/array-type': ['error', {
		default: 'array',
	}],
	'@typescript-eslint/consistent-generic-constructors': ['error'],
	'@typescript-eslint/consistent-indexed-object-style': ['error'],
	'@typescript-eslint/consistent-type-definitions': ['error'],
	'@typescript-eslint/consistent-type-imports': [
		'error',
		{ prefer: 'type-imports', fixStyle: 'separate-type-imports' },
	],
	'@typescript-eslint/explicit-function-return-type': ['error'],
	'@typescript-eslint/explicit-module-boundary-types': ['error'],
	'@typescript-eslint/method-signature-style': ['error', 'method'],
	'@typescript-eslint/no-deprecated': ['error'],
	'@typescript-eslint/naming-convention': [
		'error',
		{
			selector: 'variable',
			format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
			leadingUnderscore: 'allow',
			trailingUnderscore: 'forbid',
		},
		{
			selector: 'classProperty',
			modifiers: ['static'],
			format: ['PascalCase'],
			leadingUnderscore: 'forbid',
			trailingUnderscore: 'forbid',
		},
		{
			selector: ['typeLike', 'enum', 'enumMember', 'class'],
			format: ['PascalCase'],
			leadingUnderscore: 'forbid',
			trailingUnderscore: 'forbid',
		},
	],
	'@typescript-eslint/no-duplicate-enum-values': ['error'],
	'@typescript-eslint/no-duplicate-type-constituents': ['error'],
	'@typescript-eslint/no-empty-object-type': ['error'],
	'@typescript-eslint/no-extra-non-null-assertion': ['error'],
	'@typescript-eslint/no-extraneous-class': ['error'],
	'@typescript-eslint/no-inferrable-types': ['error'],
	'@typescript-eslint/no-invalid-void-type': ['error'],
	'@typescript-eslint/no-mixed-enums': ['error'],
	'@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
	'@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
	'@typescript-eslint/no-unsafe-enum-comparison': ['error'],
	'@typescript-eslint/no-unsafe-return': ['error'],
	'@typescript-eslint/no-unsafe-type-assertion': ['error'],
	'@typescript-eslint/prefer-as-const': ['error'],
	'@typescript-eslint/prefer-literal-enum-member': ['error'],
	'@typescript-eslint/prefer-ts-expect-error': ['error'],
};
