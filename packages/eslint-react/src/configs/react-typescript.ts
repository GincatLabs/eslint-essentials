import { tsConfigs } from '@gincat/eslint-core';
import reactPlugin from 'eslint-plugin-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import globals from 'globals';
import { reactRules } from 'src/rules/react.js';
import tseslint from 'typescript-eslint';

export const tsReactConfigs = tseslint.config(
	...tsConfigs,
	{
		files: ['**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],
	},
	{
		plugins: {
			react: reactPlugin,
		},
	},
	{
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
			},
		},
	},
	{
		rules: {
			...reactRules,
		},
	},
);
