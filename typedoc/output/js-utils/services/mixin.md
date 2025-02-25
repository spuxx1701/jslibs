## Interfaces

### IService

Defined in: [service-mixin.ts:1](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/mixin/service-mixin.ts#L1)

#### Accessors

##### instance

###### Get Signature

> **get** **instance**(): [`IService`](mixin.md#iservice)

Defined in: [service-mixin.ts:2](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/mixin/service-mixin.ts#L2)

###### Returns

[`IService`](mixin.md#iservice)

## Functions

### ServiceMixin()

> **ServiceMixin**\<`TService`\>(): _typeof_ `Service`

Defined in: [service-mixin.ts:13](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/mixin/service-mixin.ts#L13)

Extending `ServiceMixin` will turn the inheriting class into a singleton object.

#### Type Parameters

• **TService**

#### Returns

_typeof_ `Service`

#### Example

```ts
class MyService extends ServiceMixin<MyService>() {
  // ...
}
```
