

## Interfaces

### ComponentProps\<TElement\>

Defined in: [index.ts:8](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/types/public/index.ts#L8)

A property interface for components to extend from. Includes some basic properties used
by almost all components.

#### Type Parameters

• **TElement** _extends_ `HTMLElement` = `HTMLElement`

#### Properties

##### attrs?

> `optional` **attrs**: `Omit`\<`HTMLAttributes`\<`TElement`\>, `"style"`\>

Defined in: [index.ts:22](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/types/public/index.ts#L22)

The component's attributes.

##### class?

> `optional` **class**: `string`

Defined in: [index.ts:12](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/types/public/index.ts#L12)

The component's class names.

##### style?

> `optional` **style**: `PropertiesHyphen`

Defined in: [index.ts:17](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/types/public/index.ts#L17)

The component's style.
