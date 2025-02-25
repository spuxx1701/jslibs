

## Functions

### transformArrayString()

> **transformArrayString**(`value`): `string`[]

Defined in: [array-string.transformer.ts:19](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-utils/src/transformers/array-string.transformer.ts#L19)

Transforms a comma-separated string to an array of strings. Returns an empty array
if the input is not a string.

#### Parameters

##### value

`unknown`

The value to transform.

#### Returns

`string`[]

---

### TransformArrayString()

> **TransformArrayString**(): `PropertyDecorator`

Defined in: [array-string.transformer.ts:10](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-utils/src/transformers/array-string.transformer.ts#L10)

Decorator that transforms comma-separated strings to an array of strings.

#### Returns

`PropertyDecorator`

#### Example

```ts
＠TransformArrayString()
myArray: string[];
```

---

### transformBooleanString()

> **transformBooleanString**(`value`): `boolean` \| `void`

Defined in: [boolean-string.transformer.ts:18](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-utils/src/transformers/boolean-string.transformer.ts#L18)

Transforms boolean strings to booleans.
'true' and 'TRUE' becomes true, everything else becomes false.

#### Parameters

##### value

`unknown`

The value to transform.

#### Returns

`boolean` \| `void`

---

### TransformBooleanString()

> **TransformBooleanString**(): `PropertyDecorator`

Defined in: [boolean-string.transformer.ts:9](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-utils/src/transformers/boolean-string.transformer.ts#L9)

Decorator that transforms boolean strings to booleans.

#### Returns

`PropertyDecorator`

#### Example

```ts
＠TransformBooleanString()
myBoolean: boolean; // 'true' and 'TRUE' becomes true, everything else becomes false
```
