## Interfaces

### ContainerProps

Defined in: [container.types.ts:5](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/layout/container/container.types.ts#L5)

#### Extends

- `unknown`\<`HTMLElement`\>.`unknown`

#### Properties

##### color?

> `optional` **color**: `BaseColor`

Defined in: [container.types.ts:15](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/layout/container/container.types.ts#L15)

The color of the container.

###### Default

```ts
'surface';
```

##### noPadding?

> `optional` **noPadding**: `boolean`

Defined in: [container.types.ts:25](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/layout/container/container.types.ts#L25)

If `true`, the default padding will be removed.

###### Default

```ts
false;
```

##### tag?

> `optional` **tag**: `"div"` \| `"span"` \| `"section"` \| `"article"`

Defined in: [container.types.ts:10](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/layout/container/container.types.ts#L10)

The tag to use for the container.

###### Default

```ts
'div';
```

##### variant?

> `optional` **variant**: `"contained"` \| `"outlined"` \| `"colored"`

Defined in: [container.types.ts:20](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/layout/container/container.types.ts#L20)

The variant of the container. No variant will be applied by default.

###### Default

```ts
undefined;
```

## Variables

### Container

> `const` **Container**: `Component`\<[`ContainerProps`](container.md#containerprops)\>

Defined in: [container.component.tsx:10](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/solid/src/components/layout/container/container.component.tsx#L10)

A container component. Very flexible and can be used for most layout purposes.

#### Param

[ContainerProps](container.md#containerprops)
