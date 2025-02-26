## Classes

### Mapper

Defined in: [services/mapper.ts:11](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/mapping/services/mapper.ts#L11)

Provides mapping functionality for objects.

#### Constructors

##### new Mapper()

> **new Mapper**(): [`Mapper`](mapping.md#mapper)

###### Returns

[`Mapper`](mapping.md#mapper)

#### Methods

##### map()

> **map**\<`TSource`, `TTarget`\>(`source`, `sourceClass`, `targetClass`): `TTarget`

Defined in: [services/mapper.ts:36](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/mapping/services/mapper.ts#L36)

Maps properties from source to target based on the

###### Type Parameters

• **TSource** _extends_ `object`

• **TTarget** _extends_ `object`

###### Parameters

###### source

`TSource`

The source object.

###### sourceClass

() => `TSource`

The source class. This is where the

###### targetClass

() => `TTarget`

The target class. This is where the properties will be mapped to.

###### Returns

`TTarget`

An instance of the target class with properties mapped from the source object.

###### Map

decorator metadata.
Supports vanilla classes as well as sequelize models.

###### Map

decorator is expected to be used.

###### Example

```ts
// Define source and target classes
class Source {
  ＠Map()
  foo: string = 'bar';
}

class Target {
  ＠Map()
  foo: string;
}

// Use the mapper
const source = new Source();
const target = mapper.map(source, Source, Target);
console.log(target.targetProperty); // Outputs: 'bar'
```

---

### MappingModule

Defined in: [mapping.module.ts:13](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/mapping/mapping.module.ts#L13)

This module provides mapping capabilities through the `@Map()` decorator and `Mapper` provider.
As a global module, it should be imported once in the root module of your application.

#### Constructors

##### new MappingModule()

> **new MappingModule**(): [`MappingModule`](mapping.md#mappingmodule)

###### Returns

[`MappingModule`](mapping.md#mappingmodule)

## Interfaces

### MapOptions

Defined in: [types/mapping.public-types.ts:1](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/mapping/types/mapping.public-types.ts#L1)

#### Properties

##### preserveUndefined?

> `optional` **preserveUndefined**: `boolean`

Defined in: [types/mapping.public-types.ts:10](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/mapping/types/mapping.public-types.ts#L10)

Whether to preserve undefined values in the source object. Defaults to false.

##### targetKey?

> `optional` **targetKey**: `string`

Defined in: [types/mapping.public-types.ts:6](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/mapping/types/mapping.public-types.ts#L6)

The key of the property in the target object. Defaults to the name of the property
in the source object, but can be overridden to map to a different property name.

## Variables

### MAP_METADATA_KEY

> `const` **MAP_METADATA_KEY**: `"map"` = `'map'`

Defined in: [mapping.constants.ts:4](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/mapping/mapping.constants.ts#L4)

The key used to store the map metadata.

## Functions

### Map()

> **Map**(`options`): (`target`, `propertyKey`) => `void`

Defined in: [decorators/map.decorator.ts:26](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/mapping/decorators/map.decorator.ts#L26)

Used to decorator class properties that should be mapped to the target object when calling
`mapper.map()`.

#### Parameters

##### options

[`MapOptions`](mapping.md#mapoptions) = `{}`

The options for the map decorator.

#### Returns

`Function`

##### Parameters

###### target

`object`

###### propertyKey

`string` | `symbol`

##### Returns

`void`

#### Example

```ts
class User {
  ＠Map()
  name: string;
}

class UserResource {
  @Map()
  name: string;
}

const user = new User();
user.name = 'John Doe';
const userResource = mapper.map(user, UserResource);
// userResource.name === 'John Doe'
```
