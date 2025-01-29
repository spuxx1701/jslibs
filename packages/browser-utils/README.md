# @spuxx/browser-utils

![Main pipeline](https://github.com/spuxx1701/jslibs/actions/workflows/main.yml/badge.svg)
![Release pipeline](https://github.com/spuxx1701/jslibs/actions/workflows/release_browser_utils.yml/badge.svg)
![npm version](https://img.shields.io/npm/v/%40spuxx%2Fbrowser-utils)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40spuxx%2Fbrowser-utils)
![License](https://img.shields.io/github/license/spuxx1701/jslibs)

<!-- vscode-markdown-toc -->

- [Description](#Description)
- [Links](#Links)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Description'></a>Description

`@spuxx/browser-utils` contains a selection of core browser-related utilities I keep using across my web projects.

## <a name='Links'></a>Links

- [Source](https://github.com/spuxx1701/jslibs)

## Themes

### Built-in Themes

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

### Custom Themes