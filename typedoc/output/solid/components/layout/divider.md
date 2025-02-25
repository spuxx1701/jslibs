

## Interfaces

### DividerProps

Defined in: [divider.types.ts:4](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/components/layout/divider/divider.types.ts#L4)

#### Extends

- `unknown`\<`HTMLHRElement`\>

#### Properties

##### color?

> `optional` **color**: `any`

Defined in: [divider.types.ts:9](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/components/layout/divider/divider.types.ts#L9)

The color of the divider.

###### Default

```ts
'text-subtle';
```

##### variant?

> `optional` **variant**: `"straight"` \| `"sleek"`

Defined in: [divider.types.ts:14](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/components/layout/divider/divider.types.ts#L14)

The variant of the divider.

###### Default

```ts
'line';
```

##### vertical?

> `optional` **vertical**: `boolean`

Defined in: [divider.types.ts:19](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/components/layout/divider/divider.types.ts#L19)

Whether the divider is vertical.

###### Default

```ts
false;
```

## Variables

### Divider

> `const` **Divider**: `Component`\<[`DividerProps`](divider.md#dividerprops)\>

Defined in: [divider.component.tsx:11](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/components/layout/divider/divider.component.tsx#L11)

A divider component. Can be used to separate content. Supports vertical orientation.
Color defaults to `surface`, but can be customized with the `color` prop.

#### Param

#### Returns
