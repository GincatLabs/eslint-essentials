import { tsReactConfigs } from '@gincat/eslint-react';
import tseslint from 'typescript-eslint';

const config = tseslint.config(
	...tsReactConfigs,
	{
		languageOptions: {
			parserOptions: { project: './tsconfig.json' },
			parser: tseslint.parser,
		},
	},
);

export default config;
