import { tsConfigs } from '@gincat/eslint-core';
import tseslint from 'typescript-eslint';

const config = tseslint.config(
	...tsConfigs,
	{
		languageOptions: {
			parserOptions: { project: './tsconfig.json' },
			parser: tseslint.parser,
		},
	},
);

export default config;
