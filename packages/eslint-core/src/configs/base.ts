import stylisticJs from '@stylistic/eslint-plugin-js';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import { baseRules } from '../rules/base.js';

export const jsConfigs = defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
	},
	{
		plugins: {
			'import': importPlugin,
			'@stylistic/js': stylisticJs,
		},
	},
	{
		rules: {
			...baseRules,
		},
	},
]);
