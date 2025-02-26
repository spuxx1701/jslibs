## Functions

### deepMerge()

> **deepMerge**(...`sources`): `RecursiveObject`

Defined in: [misc.utils.ts:69](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/utils/misc/misc.utils.ts#L69)

Recursively merges properties of source objects into the target object.
If a property is an object, it will be merged rather than replaced.
If a property is an array, it will be replaced rather than merged.

#### Parameters

##### sources

...(`string` \| `RecursiveObject`)[]

The source objects from which properties will be merged.

#### Returns

`RecursiveObject`

The merged object.

#### Example

```ts
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
const merged = deepMerge(obj1, obj2);
console.log(merged); // { a: 1, b: { c: 2, d: 3 }, e: 4 }
```

---

### isEmptyArray()

> **isEmptyArray**(`array`): `boolean`

Defined in: [misc.utils.ts:47](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/utils/misc/misc.utils.ts#L47)

Returns true if the given array is null, undefined or empty.

#### Parameters

##### array

`unknown`[]

The array to check.

#### Returns

`boolean`

Whether the given array is null, undefined or empty.

#### Example

```ts
isEmptyArray([]); // true
isEmptyArray(undefined); // true
isEmptyArray(null); // true
isEmptyArray([1, 2, 3]); // false
```

---

### isEmptyOrWhitespace()

> **isEmptyOrWhitespace**(`value`): `boolean`

Defined in: [misc.utils.ts:27](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/utils/misc/misc.utils.ts#L27)

Checks whether the given value is null, undefined or a string that contains only whitespace characters.

#### Parameters

##### value

`unknown`

The value to check.

#### Returns

`boolean`

Whether the given value is null, undefined or a string that contains only whitespace characters.

#### Example

```ts
isEmptyOrWhitespace(''); // true
isEmptyOrWhitespace(' '); // true
isEmptyOrWhitespace(undefined); // true
isEmptyOrWhitespace(null); // true
isEmptyOrWhitespace('foo'); // false
isEmptyOrWhitespace(0); // false
isEmptyOrWhitespace({}); // false
isEmptyOrWhitespace([]); // false
isEmptyOrWhitespace(false); // false
```

---

### sleep()

> **sleep**(`ms`): `Promise`\<`void`\>

Defined in: [misc.utils.ts:8](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/utils/misc/misc.utils.ts#L8)

Returns a promise that resolves after the given amount of milliseconds.

#### Parameters

##### ms

`number`

The amount of milliseconds.

#### Returns

`Promise`\<`void`\>

A promise that resolves after the given amount of milliseconds.

#### Example

```ts
await sleep(1000);
```
