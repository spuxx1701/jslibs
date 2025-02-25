

## Classes

### Logger

Defined in: [logger/logger.service.ts:38](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L38)

Represents a logger service that provides logging functionality. Message will be logged
to console and also persisted for the duration of the service's lifetime.

#### Example

```ts
// Set the log level while bootstrapping your application
Logger.level = 'debug';

// Inside a component
Logger.debug('Hello World!', 'MyComponent');

// Inside a class
Logger.info('Hello World!', this.constructor.name);

// Without context
Logger.warn('Hello World!');

// Directly importing the log functions
import { error } from '@spuxx/js-utils/services/logger';

error('Hello World!');

// Access the stored messages
Logger.messages.forEach((message) => console.log(JSON.stringify(message)));
```

#### Extends

- `Service`\<[`Logger`](logger.md#logger), `this`\>

#### Constructors

##### new Logger()

> `protected` **new Logger**(): [`Logger`](logger.md#logger)

Defined in: [mixin/service-mixin.ts:24](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/mixin/service-mixin.ts#L24)

The constructor needs to be protected to prevent direct construction calls.

###### Returns

[`Logger`](logger.md#logger)

###### Inherited from

`ServiceMixin<Logger>().constructor`

#### Properties

##### \_instance

> `static` **\_instance**: [`Logger`](logger.md#logger)

Defined in: [mixin/service-mixin.ts:19](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/mixin/service-mixin.ts#L19)

⛔️ Do not set this and treat it as if it were `protected`! ⛔️ Unfortunately, TypeScript does not allow
private or protected members in declaration files yet. See: https://github.com/microsoft/TypeScript/issues/35822

###### Inherited from

`ServiceMixin<Logger>()._instance`

#### Accessors

##### instance

###### Get Signature

> **get** `static` **instance**(): `TService`

Defined in: [mixin/service-mixin.ts:28](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/mixin/service-mixin.ts#L28)

Returns the instance of the service.

###### Returns

`TService`

###### Inherited from

`ServiceMixin<Logger>().instance`

##### level

###### Get Signature

> **get** `static` **level**(): [`LogLevel`](logger.md#loglevel)

Defined in: [logger/logger.service.ts:45](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L45)

Returns the `Logger`s log level.

###### Returns

[`LogLevel`](logger.md#loglevel)

##### messages

###### Get Signature

> **get** `static` **messages**(): [`LogMessage`](logger.md#logmessage)[]

Defined in: [logger/logger.service.ts:61](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L61)

Returns all log messages.

###### Returns

[`LogMessage`](logger.md#logmessage)[]

An array of log messages.

#### Methods

##### debug()

> `static` **debug**(`message`, `context`?): `void`

Defined in: [logger/logger.service.ts:70](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L70)

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

##### destroy()

> `static` **destroy**(): `void`

Defined in: [mixin/service-mixin.ts:35](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/mixin/service-mixin.ts#L35)

###### Returns

`void`

###### Inherited from

`ServiceMixin<Logger>().destroy`

##### error()

> `static` **error**(`message`, `context`?): `void`

Defined in: [logger/logger.service.ts:103](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L103)

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

##### info()

> `static` **info**(`message`, `context`?): `void`

Defined in: [logger/logger.service.ts:81](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L81)

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

##### setLevel()

> `static` **setLevel**(`level`): `void`

Defined in: [logger/logger.service.ts:53](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L53)

Sets the `Logger`s log level.

###### Parameters

###### level

[`LogLevel`](logger.md#loglevel)

The log level to set.

###### Returns

`void`

##### warn()

> `static` **warn**(`message`, `context`?): `void`

Defined in: [logger/logger.service.ts:92](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L92)

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

## Interfaces

### LogMessage

Defined in: [logger/logger.service.ts:6](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L6)

#### Properties

##### context?

> `optional` **context**: `string`

Defined in: [logger/logger.service.ts:10](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L10)

##### date

> **date**: `Date`

Defined in: [logger/logger.service.ts:9](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L9)

##### level

> **level**: [`LogLevel`](logger.md#loglevel)

Defined in: [logger/logger.service.ts:8](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L8)

##### text

> **text**: `string`

Defined in: [logger/logger.service.ts:7](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L7)

## Type Aliases

### LogLevel

> **LogLevel**: `"debug"` \| `"info"` \| `"warn"` \| `"error"`

Defined in: [logger/logger.service.ts:4](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L4)

## Variables

### debug

> `const` **debug**: `any`

Defined in: [logger/logger.service.ts:126](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L126)

---

### error

> `const` **error**: `any`

Defined in: [logger/logger.service.ts:129](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L129)

---

### info

> `const` **info**: `any`

Defined in: [logger/logger.service.ts:127](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L127)

---

### warn

> `const` **warn**: `any`

Defined in: [logger/logger.service.ts:128](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/js-utils/src/services/logger/logger.service.ts#L128)
