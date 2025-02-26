## Classes

### Logger

Defined in: [logger/logger.service.ts:37](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L37)

Represents a logger service that provides logging functionality. Messages will be logged
to console and also persisted for the duration of the service's lifetime.

#### Example

```ts
// Set the log level while bootstrapping your application
Logger.level = 'debug';

// Logging inside a function
Logger.debug('Hello World!', 'MyFunction');

// Logging inside a class
Logger.info('Hello World!', this.constructor.name);

// Logging without a context
Logger.warn('Hello World!');

// You may also directly import the logging functions
import { error } from '@spuxx/js-utils';
error('Hello World!');

// Access the stored messages
Logger.messages.forEach((message) => console.log(JSON.stringify(message)));
```

#### Extends

- `Service`\<[`Logger`](logger.md#logger), `this`\>

#### Constructors

##### new Logger()

> `protected` **new Logger**(): [`Logger`](logger.md#logger)

Defined in: [mixin/service-mixin.ts:25](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/mixin/service-mixin.ts#L25)

Service classes should not be instantiated directly. Instead, access the `instance` property
to get the existing singleton instance or to create a new one if it does not yet exist.

###### Returns

[`Logger`](logger.md#logger)

###### Inherited from

`ServiceMixin<Logger>().constructor`

#### Accessors

##### instance

###### Get Signature

> **get** `static` **instance**(): `TService`

Defined in: [mixin/service-mixin.ts:34](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/mixin/service-mixin.ts#L34)

Returns the instance of the service.

###### Example

```ts
const myService = MyService.instance;
myService.doSomething();
```

###### Returns

`TService`

The instance of the service.

###### Inherited from

`ServiceMixin<Logger>().instance`

##### level

###### Get Signature

> **get** `static` **level**(): [`LogLevel`](logger.md#loglevel)

Defined in: [logger/logger.service.ts:48](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L48)

Returns the `Logger`s log level.

###### Example

```ts
Logger.setLevel('debug');
console.log(Logger.level); // Output: debug
```

###### Returns

[`LogLevel`](logger.md#loglevel)

The log level.

##### messages

###### Get Signature

> **get** `static` **messages**(): [`LogMessage`](logger.md#logmessage)[]

Defined in: [logger/logger.service.ts:71](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L71)

Returns all stored log messages.

###### Example

```ts
console.log(Logger.messages.length); // Output: 0
Logger.debug('Hello World!');
console.log(Logger.messages.length); // Output: 1
```

###### Returns

[`LogMessage`](logger.md#logmessage)[]

The list of stored log messages.

#### Methods

##### debug()

> `static` **debug**(`message`, `context`?): `void`

Defined in: [logger/logger.service.ts:82](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L82)

Logs a `debug` message.

###### Parameters

###### message

`string`

The message to log.

###### context?

`string`

The context of the message (e.g. the caller).

###### Returns

`void`

###### Example

```ts
Logger.debug('Hello World!', 'MyFunction');
```

##### destroy()

> `static` **destroy**(): `void`

Defined in: [mixin/service-mixin.ts:48](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/mixin/service-mixin.ts#L48)

Destroys the existing instance of the service.

###### Returns

`void`

###### Example

```ts
const myService = MyService.instance;
MyService.destroy();
const myNewService = MyService.instance; // This will be a new instance
```

###### Inherited from

`ServiceMixin<Logger>().destroy`

##### error()

> `static` **error**(`message`, `context`?): `void`

Defined in: [logger/logger.service.ts:121](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L121)

Logs an `error` message.

###### Parameters

###### message

`string`

The message to log.

###### context?

`string`

The context of the message (e.g. the caller).

###### Returns

`void`

###### Example

```ts
Logger.error('Hello World!', 'MyFunction');
```

##### info()

> `static` **info**(`message`, `context`?): `void`

Defined in: [logger/logger.service.ts:95](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L95)

Logs an `info` message.

###### Parameters

###### message

`string`

The message to log.

###### context?

`string`

The context of the message (e.g. the caller).

###### Returns

`void`

###### Example

```ts
Logger.info("Hello World!", "MyFunction);
```

##### setLevel()

> `static` **setLevel**(`level`): `void`

Defined in: [logger/logger.service.ts:59](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L59)

Sets the `Logger`s log level.

###### Parameters

###### level

[`LogLevel`](logger.md#loglevel)

The log level to set.

###### Returns

`void`

###### Example

```ts
Logger.setLevel('debug');
console.log(Logger.level); // Output: debug
```

##### warn()

> `static` **warn**(`message`, `context`?): `void`

Defined in: [logger/logger.service.ts:108](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L108)

Logs a `warn` message.

###### Parameters

###### message

`string`

The message to log.

###### context?

`string`

The context of the message (e.g. the caller).

###### Returns

`void`

###### Example

```ts
Logger.warn('Hello World!', 'MyFunction');
```

## Interfaces

### LogMessage

Defined in: [logger/logger.service.ts:6](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L6)

#### Properties

##### context?

> `optional` **context**: `string`

Defined in: [logger/logger.service.ts:10](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L10)

##### date

> **date**: `Date`

Defined in: [logger/logger.service.ts:9](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L9)

##### level

> **level**: [`LogLevel`](logger.md#loglevel)

Defined in: [logger/logger.service.ts:8](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L8)

##### text

> **text**: `string`

Defined in: [logger/logger.service.ts:7](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L7)

## Type Aliases

### LogLevel

> **LogLevel**: `"debug"` \| `"info"` \| `"warn"` \| `"error"`

Defined in: [logger/logger.service.ts:4](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L4)

## Variables

### debug

> `const` **debug**: `any`

Defined in: [logger/logger.service.ts:151](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L151)

Logs a `debug` message.

#### Param

The message to log.

#### Param

The context of the message (e.g. the caller).

#### Example

```ts
debug('Hello World!', 'MyFunction');
```

---

### error

> `const` **error**: `any`

Defined in: [logger/logger.service.ts:175](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L175)

Logs an `error` message.

#### Param

The message to log.

#### Param

The context of the message (e.g. the caller).

#### Example

```ts
error('Hello World!', 'MyFunction');
```

---

### info

> `const` **info**: `any`

Defined in: [logger/logger.service.ts:159](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L159)

Logs an `info` message.

#### Param

The message to log.

#### Param

The context of the message (e.g. the caller).

#### Example

```ts
info("Hello World!", "MyFunction);
```

---

### warn

> `const` **warn**: `any`

Defined in: [logger/logger.service.ts:167](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/logger/logger.service.ts#L167)

Logs a `warn` message.

#### Param

The message to log.

#### Param

The context of the message (e.g. the caller).

#### Example

```ts
warn('Hello World!', 'MyFunction');
```
