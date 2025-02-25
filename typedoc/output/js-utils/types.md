## Type Aliases

### Constructor()\<T\>

> **Constructor**\<`T`\>: (...`args`) => `T`

Defined in: [index.ts:24](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/types/index.ts#L24)

A type that represents a class constructor.

#### Type Parameters

• **T** = `any`

The class.

#### Parameters

##### args

...`any`[]

#### Returns

`T`

#### Example

```ts
class MyClass {}
type MyConstructor = Constructor<MyClass>;
```

---

### OmitFunctionMembers\<T\>

> **OmitFunctionMembers**\<`T`\>: `{ [K in keyof T as T[K] extends Function ? never : K]: T[K] }`

Defined in: [index.ts:36](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/types/index.ts#L36)

Creates a subsidiary type that omits all function members from a given type.

#### Type Parameters

• **T**

The type to omit function members from.

#### Example

```ts
interface MyInterface {
  foo: string;
  bar(): void;
}
type MyOmitted = OmitFunctionMembers<MyInterface>; // { foo: string; }
```

---

### OptionalProperties\<T\>

> **OptionalProperties**\<`T`\>: `{ [K in keyof T as {} extends { [P in K]: T[K] } ? K : never]: T[K] }`

Defined in: [index.ts:12](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/types/index.ts#L12)

A type that extracts the optional properties from another type.

#### Type Parameters

• **T**

The type to extract optional properties from.

#### Example

```ts
interface MyInterface {
  foo: string;
  bar?: string;
}
type MyOptional = OptionalProperties<MyInterface>; // { bar?: string; }
```
