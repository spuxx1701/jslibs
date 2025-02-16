# @spuxx/js-utils

![Main pipeline](https://github.com/spuxx-dev/jslibs/actions/workflows/main.yml/badge.svg)
![Release pipeline](https://github.com/spuxx-dev/jslibs/actions/workflows/release_js_utils.yml/badge.svg)
![npm version](https://img.shields.io/npm/v/%40spuxx%2Fjs-utils)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40spuxx%2Fjs-utils)
![License](https://img.shields.io/github/license/spuxx-dev/jslibs)

<!-- vscode-markdown-toc -->

- [Description](#Description)
- [Documentation](#Documentation)
- [Installation](#Installation)
- [Utility Functions](#UtilityFunctions)
- [Utility Types](#UtilityTypes)
- [Singleton Services](#SingletonServices)
  - [`ServiceMixin`](#ServiceMixin)
  - [`HttpClientMixin`](#HttpClientMixin)
  - [`Intl`](#Intl)
  - [`Logger`](#Logger)
- [Links](#Links)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Description'></a>Description

`@spuxx/js-utils` contains a selection of common utilities for use in JavaScript and TypeScript projects. The package is esm-only, fully typed and tree-shakable.

## <a name='Documentation'></a>Documentation

Documentation is provided by [`Storybook`](https://storybook.js.org/) and can be found here:

- [Documentation](https://spuxx-dev.github.io/jslibs/?path=/docs/js-utils-introduction--docs)

## <a name='Installation'></a>Installation

Depending on your package manager, run:

- `npm install @spuxx/js-utils` (npm)
- `pnpm install @spuxx/js-utils` (pnpm)

## <a name='UtilityFunctions'></a>Utility Functions

The package includes a collection of [useful JavaScript functions](/packages/js-utils/src/utils/).

## <a name='UtilityTypes'></a>Utility Types

The package also includes a collection of [useful TypeScript types](/packages/js-utils/src/types/public/).

## <a name='SingletonServices'></a>Singleton Services

### <a name='ServiceMixin'></a>`ServiceMixin`

The [`ServiceMixin`](/packages/js-utils/src/services/mixin/service-mixin.ts) function enables you to easily create and maintain classes that follow the [Singleton](https://en.wikipedia.org/wiki/Singleton_pattern) design pattern. In addition to the mixin, the library includes a couple of specialized singleton classes built upon that same mixin. Those singletons represent easy-to-use abstractions for a couple of common use-cases.

### <a name='HttpClientMixin'></a>`HttpClientMixin`

[`HttpClientMixin`](/packages/js-utils/src/services/http-client-mixin/http-client.service-mixin.ts) is a very simple and light-weight approach to data fetching. It currently supports:

- Defining and implementing endpoints in an entirely type-safe way
- Data transformation
- Standardized error handling on the global, per-endpoint and per-request level

### <a name='Intl'></a>`Intl`

[`Intl`](/packages/js-utils/src/services/intl/intl.service.ts) is a very light-weight approach to internationalization. It currently supports:

- Automatic locale detection
- Fallback locales
- Dictionary (or translation) files
- Variables

### <a name='Logger'></a>`Logger`

[`Logger`](/packages/js-utils/src//services/logger/logger.service.ts) is a light-weight service for creating standardized application logs. It is intended for use in environments where large-scale logging solutions are often not required (e.g. small to medium client-side browser applications). It currently supports:

- A standardized API with stuff like timestamps, message severity or contextualization
- Log collection
- Outputting to `console`

## <a name='Links'></a>Links

- [About me](https://spuxx.dev/)
- [Documentation](https://spuxx-dev.github.io/jslibs/?path=/docs/js-utils-introduction--docs)
- [Source](https://github.com/spuxx-dev/jslibs)
- [NPM](https://www.npmjs.com/package/@spuxx/js-utils)
- [Buy me a coffee](https://buymeacoffee.com/spuxx) ☕️
