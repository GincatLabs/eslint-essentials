# @gincat/eslint-react

This is a package designed to enforce code standards for internal proyects at Gincat Digital using React framework. It contains all the necessary ESLint rules for JavaScript/TypeScript with React projects that follow the coding conventions established by our group. This package ensures that code adheres to a consistent style, promoting maintainability, readability, and best practices across all projects.

## Installation

Install `@gincat/eslint-react` with npm:

```bash
npm install --save-dev @gincat/eslint-react 
```

Make sure to have installed ESLint v9.22 or greater for full compatibility.

## Usage

To use the ESLint rules from `@gincat/eslint-react` in your project, you need to extend the ESLint configuration by adding it to your `eslint.config.js` or equivalent ESLint configuration file.

### Example configuration for JavaScript projects:

```javascript
import { defineConfig } from 'eslint/config';
import { reactConfigs } from '@gincat/eslint-react';

export default defineConfig(
	...reactConfigs,
	// Your other configurations...
);
```

### Example configuration for TypeScript projects:

The TypeScript configuration extends all base rules from `reactConfigs` so you don't have to include it in your configs.

```typescript
import tseslint from 'typescript-eslint';
import { tsReactConfigs } from '@gincat/eslint-react';

export default tseslint.config(
	...tsReactConfigs,
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

This package includes the base linting rules that are specific to the coding style and standards used by Gincat Digital. These rules cover various aspects of JavaScript and TypeScript code using the famous React framework, such as:

- Code formatting
- Best practices
- Error handling
- Variable declarations and naming conventions
- Function and method usage
- Imports and exports
- TypeScript-specific rules
- React-specific rules

For a complete list of the rules included in this package, you can refer to the configuration or consult the code within the package itself.

## Plugins Included

This package extends our `@gincat/eslint-core` shared configuration which contains all base rules for both JavaScript and TypeScript lined with our code standards.

```
@gincat/eslint-core
eslint-plugin-react
```

## Compatibility

- JavaScript (ES6+)
- TypeScript (with `@typescript-eslint/parser`)
- ESlint 9.22+

Ensure you have the necessary dependencies for TypeScript if you are working with TypeScript files.

## License

This repository is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for more details.