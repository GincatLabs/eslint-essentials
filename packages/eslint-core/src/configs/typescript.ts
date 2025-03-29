import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import { baseRules } from '../rules/base.js';
import { tsRules } from '../rules/typescript.js';

export const tsConfigs = tseslint.config([
	{
		files: ['**/*.{js,mjs,cjs,ts,mts}'],
	},
	{
		plugins: {
			'import': importPlugin,
			'@stylistic/js': stylisticJs,
			'@stylistic/ts': stylisticTs,
			'@typescript-eslint': tseslint.plugin,
		},
	},
	{
		rules: {
			...baseRules,
			...tsRules,
		},
	},
]);
