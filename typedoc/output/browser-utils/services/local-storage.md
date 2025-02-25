

## Interfaces

### LocalStorageOptions\<TLocalStorage\>

Defined in: [types.ts:1](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/browser-utils/src/services/local-storage/types.ts#L1)

#### Type Parameters

• **TLocalStorage**

#### Properties

##### defaultValues

> **defaultValues**: `TLocalStorage`

Defined in: [types.ts:3](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/browser-utils/src/services/local-storage/types.ts#L3)

##### key

> **key**: `string`

Defined in: [types.ts:2](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/browser-utils/src/services/local-storage/types.ts#L2)

## Functions

### LocalStorageMixin()

> **LocalStorageMixin**\<`TLocalStorage`\>(`options`): _typeof_ `LocalStorage`

Defined in: [local-storage.service-mixin.ts:21](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/browser-utils/src/services/local-storage/local-storage.service-mixin.ts#L21)

A mixin that provides a standardized and type-safe abstraction of the browser's
`localStorage` API.
For more information, see: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

#### Type Parameters

• **TLocalStorage** _extends_ `object`

#### Parameters

##### options

[`LocalStorageOptions`](local-storage.md#localstorageoptionstlocalstorage)\<`TLocalStorage`\>

#### Returns

_typeof_ `LocalStorage`

#### Example

```ts
export interface ILocalStorage {
  foo: string;
}
export class LocalStorage extends LocalStorageMixin<ILocalStorage>({
  key: 'my-application',
  defaultValues: { foo: 'bar' },
}) {}
// Write to local storage
LocalStorage.set('foo', 'baz');
// Read from local storage
const foo = LocalStorage.get('foo');
```
