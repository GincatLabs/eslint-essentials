import { jsConfigs } from '@gincat/eslint-core';
import { defineConfig } from 'eslint/config';
import reactPlugin from 'eslint-plugin-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import globals from 'globals';
import { reactRules } from 'src/rules/react.js';

export const reactConfigs = defineConfig(
	...jsConfigs,
	{
		files: ['**/*.{js,mjs,cjs,jsx}'],
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
