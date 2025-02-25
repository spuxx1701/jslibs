

## Classes

### TestAppLogger

Defined in: [test.logger.ts:18](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/logging/test.logger.ts#L18)

A custom logger for testing purposes. Replaces `printMessages` with a mocked function
that can be spied on.

#### Example

```ts
const logger = new TestAppLogger();
logger.debug('hello world');
expect(logger.printMessages).toHaveBeenCalledTimes(1);

// Or hand it over to TestContainer
const container = await TestContainer.create({
  logger,
  // ...
});
```

#### Extends

- `unknown`

#### Constructors

##### new TestAppLogger()

> **new TestAppLogger**(): [`TestAppLogger`](logging.md#testapplogger)

###### Returns

[`TestAppLogger`](logging.md#testapplogger)

###### Inherited from

`CustomLogger.constructor`

#### Properties

##### messages

> **messages**: `unknown`[] = `[]`

Defined in: [test.logger.ts:22](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/logging/test.logger.ts#L22)

The messages that have been logged. Clear with `clear()`.

##### printMessages

> **printMessages**: `any`

Defined in: [test.logger.ts:24](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/logging/test.logger.ts#L24)

#### Methods

##### clear()

> **clear**(): `void`

Defined in: [test.logger.ts:29](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/logging/test.logger.ts#L29)

Clears `messages` and all calls to `printMessages`.

###### Returns

`void`
