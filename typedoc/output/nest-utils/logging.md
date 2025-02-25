

## Classes

### CustomLogger

Defined in: [custom.logger.ts:21](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-utils/src/logging/custom.logger.ts#L21)

The custom application logger. This logger extends the NestJS console logger, but
simplifies the API to set the application's log levels.

#### Example

```ts
// main.ts
const app = await NestFactory.create(AppModule, {
  logger: new CustomLogger({ logLevel: ApplicationLogLevel.Verbose }),
});
```

#### Extends

- `unknown`

#### Constructors

##### new CustomLogger()

> **new CustomLogger**(`options`?): [`CustomLogger`](logging.md#customlogger)

Defined in: [custom.logger.ts:22](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-utils/src/logging/custom.logger.ts#L22)

###### Parameters

###### options?

###### context?

`string`

###### logLevel?

[`ApplicationLogLevel`](logging.md#applicationloglevel)

###### Returns

[`CustomLogger`](logging.md#customlogger)

###### Overrides

`ConsoleLogger.constructor`

#### Methods

##### getContext()

> **getContext**(): `any`

Defined in: [custom.logger.ts:38](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-utils/src/logging/custom.logger.ts#L38)

Returns the logger's current default context.

###### Returns

`any`

##### setLogLevel()

> **setLogLevel**(`logLevel`): `void`

Defined in: [custom.logger.ts:46](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-utils/src/logging/custom.logger.ts#L46)

Sets the logger's log level.

###### Parameters

###### logLevel

[`ApplicationLogLevel`](logging.md#applicationloglevel)

THe log level to set.

###### Returns

`void`

## Type Aliases

### ApplicationLogLevel

> **ApplicationLogLevel**: _typeof_ [`ApplicationLogLevel`](logging.md#applicationloglevel-1)\[keyof _typeof_ [`ApplicationLogLevel`](logging.md#applicationloglevel-1)\]

Defined in: [custom.logger.ts:6](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-utils/src/logging/custom.logger.ts#L6)

## Variables

### ApplicationLogLevel

> `const` **ApplicationLogLevel**: `object`

Defined in: [custom.logger.ts:6](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-utils/src/logging/custom.logger.ts#L6)

The application log level.

#### Type declaration

##### Default

> `readonly` **Default**: `"default"` = `'default'`

##### Verbose

> `readonly` **Verbose**: `"verbose"` = `'verbose'`
