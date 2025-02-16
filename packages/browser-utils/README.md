# @spuxx/browser-utils

![Main pipeline](https://github.com/spuxx-dev/jslibs/actions/workflows/main.yml/badge.svg)
![Release pipeline](https://github.com/spuxx-dev/jslibs/actions/workflows/release_browser_utils.yml/badge.svg)
![npm version](https://img.shields.io/npm/v/%40spuxx%2Fbrowser-utils)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40spuxx%2Fbrowser-utils)
![License](https://img.shields.io/github/license/spuxx-dev/jslibs)

<!-- vscode-markdown-toc -->

- [Description](#Description)
- [Installation](#Installation)
- [Singleton Services](#SingletonServices)
  - [`Config`](#Config)
  - [`LocalStorageMixin`](#LocalStorageMixin)
  - [`UseAgent`](#UseAgent)
- [Themes](#Themes)
  - [Built-in Themes](#Built-inThemes)
  - [Custom Themes](#CustomThemes)
- [Links](#Links)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Description'></a>Description

`@spuxx/browser-utils` contains a selection of common utilities for use in browser applications. The package is esm-only, fully typed and tree-shakable.

## <a name='Installation'></a>Installation

Depending on your package manager, run:

- `npm install @spuxx/browser-utils` (npm)
- `pnpm install @spuxx/browser-utils` (pnpm)

## <a name='SingletonServices'></a>Singleton Services

The package includes a couple of singleton services. Those services follow the [Singleton](https://en.wikipedia.org/wiki/Singleton_pattern) design pattern and are built upon [`ServiceMixin`](/packages/js-utils/src/services/mixin/service-mixin.ts) provided by the [`@spuxx/js-utils`](https://www.npmjs.com/package/@spuxx/js-utils) package.

### <a name='Config'></a>`Config`

[`Config`](/packages/browser-utils/src/services/config/config.service.ts) provides a light-weight API to maintain client-side (and possibly environment-dependent) configuration.

- Type-safe functions to set up and access configuration
- Default values
- Injecting values at build time via [Vite's `import.meta.env`](https://vite.dev/guide/env-and-mode)
- Injecting values at runtime via script injection

### <a name='LocalStorageMixin'></a>`LocalStorageMixin`

[`LocalStorageMixin`](/packages/browser-utils/src/services/local-storage/local-storage.service-mixin.ts) provides a standardized and easy-to-use API for accessing the browser's [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). It currently supports:

- Type-safe functions to set up and access `localStorage`
- Saving multiple values as a single, well-organized JSON

### <a name='UseAgent'></a>`UseAgent`

[`UserAgent`](/packages/browser-utils/src/services/user-agent/user-agent.service.ts) provides information about the user-agent.

## <a name='Themes'></a>Themes

### <a name='Built-inThemes'></a>Built-in Themes

The library comes with two built-in themes, `default` and `light`.
Both themes are based on [Tailwind's color palette](https://tailwindcss.com/docs/customizing-colors)
(also see [tailwindcolor.com](https://tailwindcolor.com/)).

- [Default theme](packages/browser-utils/themes/default.theme.css)
- [Light theme](packages/browser-utils/themes/light.theme.css)

You may override each of those themes by creating a CSS file and overwriting any of the variables:

```css
html,
html *,
* {
  /* Overwrite default theme variables */
}

html[theme='light'],
html[theme='light'] *,
*[theme='light'] {
  /* Overwrite light theme variables */
}
```

### <a name='CustomThemes'></a>Custom Themes

## <a name='Links'></a>Links

- [About me](https://spuxx.dev/)
- [Source](https://github.com/spuxx-dev/jslibs)
- [NPM](https://www.npmjs.com/package/@spuxx/browser-utils)
- [Buy me a coffee](https://buymeacoffee.com/spuxx) ☕️
