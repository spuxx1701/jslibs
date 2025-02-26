## Functions

### ServiceMixin()

> **ServiceMixin**\<`TService`\>(): _typeof_ `Service`

Defined in: [service-mixin.ts:11](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/mixin/service-mixin.ts#L11)

Extending `ServiceMixin` will turn the inheriting class into a singleton class.

#### Type Parameters

• **TService**

The type of the service.

#### Returns

_typeof_ `Service`

A parent class that turns the inheriting class into a singleton class.

#### See

[Pattern](https://en.wikipedia.org/wiki/Singleton_pattern|Singleton)

#### Example

```ts
class MyService extends ServiceMixin<MyService>() {
  // ...
}
```
