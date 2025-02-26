## Interfaces

### ButtonProps

Defined in: [button.types.ts:6](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/input/button/button.types.ts#L6)

#### Extends

- `unknown`\<`HTMLButtonElement`\>.`unknown`

#### Properties

##### color?

> `optional` **color**: `any`

Defined in: [button.types.ts:16](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/input/button/button.types.ts#L16)

The color of the button.

###### Default

```ts
'primary';
```

##### disabled?

> `optional` **disabled**: `boolean`

Defined in: [button.types.ts:35](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/input/button/button.types.ts#L35)

Whether the button is disabled.

###### Default

```ts
false;
```

##### icon?

> `optional` **icon**: `any`

Defined in: [button.types.ts:21](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/input/button/button.types.ts#L21)

The icon that should be rendered to the left of the button's content.
Supports both IconifyIcon and JSX.Element.

##### loader?

> `optional` **loader**: `boolean`

Defined in: [button.types.ts:45](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/input/button/button.types.ts#L45)

An alternative loader to be displayed instead of the default loading indicator.

###### Default

```ts
undefined;
```

##### loading?

> `optional` **loading**: `boolean`

Defined in: [button.types.ts:40](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/input/button/button.types.ts#L40)

Whether the button is loading. This will display a loading indicator and disable the button.

###### Default

```ts
false;
```

##### onClick()?

> `optional` **onClick**: (`event`) => `void`

Defined in: [button.types.ts:50](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/input/button/button.types.ts#L50)

A callback that will be called when the button is clicked.

###### Parameters

###### event

`MouseEvent`

The click event.

###### Returns

`void`

##### rounded?

> `optional` **rounded**: `boolean`

Defined in: [button.types.ts:30](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/input/button/button.types.ts#L30)

If enabled, the icon will be rounded and no content besides the icon will be displayed.

###### Default

```ts
false;
```

##### title?

> `optional` **title**: `string`

Defined in: [button.types.ts:25](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/input/button/button.types.ts#L25)

The title of the button.

##### variant?

> `optional` **variant**: `"contained"` \| `"outlined"` \| `"colored"`

Defined in: [button.types.ts:11](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/input/button/button.types.ts#L11)

The variant of the button.

###### Default

```ts
'contained';
```

## Variables

### Button

> `const` **Button**: `Component`\<[`ButtonProps`](button.md#buttonprops)\>

Defined in: [button.component.tsx:6](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/input/button/button.component.tsx#L6)
