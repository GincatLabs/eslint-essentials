import tseslint from 'typescript-eslint';
import { tsConfigs } from './packages/eslint-core/src/index.js';

const config = tseslint.config(
	...tsConfigs,
	{ ignores: ['packages/**/dist'] },
	{
		languageOptions: {
			parserOptions: { project: './tsconfig.json' },
			parser: tseslint.parser,
		},
	},
);

export default config;
