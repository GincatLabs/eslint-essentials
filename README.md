# Gincat Digital ESLint Monorepo

Welcome to the Gincat ESLint Monorepo, a collection of ESLint packages to help maintain coding standards across different types of projects within the Gincat organization.

## Packages

This monorepo currently includes the following ESLint packages:

### [@gincat/eslint-core](./packages/eslint-core/README.md)

This is the core ESLint configuration package used for all general-purpose JavaScript/TypeScript projects within Gincat.

- **Includes:** Standard linting rules for code style, quality, and best practices.

### [@gincat/eslint-react](./packages/eslint-react/README.md)

This ESLint configuration is specifically tailored for React-based projects within Gincat. It extends `@gincat/eslint-core` so you don't have to install it appart.

- **Includes:** Additional linting rules for React code, JSX syntax, React hooks, and functional components.

## License

This repository is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for more details.