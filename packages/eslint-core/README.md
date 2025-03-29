# @gincat/eslint-core

This is a package designed to enforce code standards for internal proyects at Gincat Digital. It contains all the necessary ESLint rules for JavaScript and TypeScript projects that follow the coding conventions established by our group. This package ensures that code adheres to a consistent style, promoting maintainability, readability, and best practices across all projects.

## Installation

Install `@gincat/eslint-core` with npm:

```bash
npm install --save-dev @gincat/eslint-core 
```

Make sure to have installed ESLint v9.22 or greater for full compatibility.

## Usage

To use the ESLint rules from `@gincat/eslint-core` in your project, you need to extend the ESLint configuration by adding it to your `eslint.config.js` or equivalent ESLint configuration file.

### Example configuration for JavaScript projects:

```javascript
import { defineConfig } from 'eslint/config';
import { jsConfigs } from '@gincat/eslint-core';

export default defineConfig(
	...jsConfigs,
	// Your other configurations...
);
```

### Example configuration for TypeScript projects:

The TypeScript configuration extends all base rules from `jsConfigs` so you don't have to include it in your configs.

```typescript
import tseslint from 'typescript-eslint';
import { tsConfigs } from '@gincat/eslint-core';

export default tseslint.config(
	...tsConfigs,
	{
		languageOptions: {
			parserOptions: { project: './tsconfig.json' },
			parser: tseslint.parser,
		},
	},
	// Your other configurations...
);
```

## Available Rules

This package includes the base linting rules that are specific to the coding style and standards used by Gincat Digital. These rules cover various aspects of JavaScript and TypeScript code, such as:

- Code formatting
- Best practices
- Error handling
- Variable declarations and naming conventions
- Function and method usage
- Imports and exports
- TypeScript-specific rules

For a complete list of the rules included in this package, you can refer to the configuration or consult the code within the package itself.

## Plugins Included

Plugins used in JavaScript configs:

```
@stylistic/eslint-plugin-js
eslint-plugin-import
```

Plugins used in TypeScript configs:

```
@stylistic/eslint-plugin-js
@stylistic/eslint-plugin-ts
eslint-plugin-import
typescript-eslint
```

## Compatibility

- JavaScript (ES6+)
- TypeScript (with `@typescript-eslint/parser`)
- ESlint 9.22+

Ensure you have the necessary dependencies for TypeScript if you are working with TypeScript files.

## License

This repository is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for more details.