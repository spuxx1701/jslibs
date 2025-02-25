

## Classes

### TestContainer

Defined in: [test-container.ts:32](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/container/test-container.ts#L32)

`TestContainer` provides an abstraction of `Nest.createTestContainer()`, offering
a custom API for easier handling and use. For more information on testing in NestJS,
see https://docs.nestjs.com/fundamentals/testing.

#### Example

```ts
// Isolated test
const container = await TestContainer.create({
  providers: [MyService],
});
const service = container.get(MyService);
// ... Your test implementation here

// End-to-end test
const container = await TestContainer.create({
  controllers: [MyController],
  providers: [MyService],
  enableEndToEnd: true,
});
const { supertest } = container;
// ... Your test implementation here
```

#### Properties

##### app?

> `optional` **app**: `INestApplication`

Defined in: [test-container.ts:42](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/container/test-container.ts#L42)

The Nest application created by `NestFactory.create()`. This will only be defined if
`enableEndToEnd` is set to `true` in the `TestContainerOptions`.

##### module

> **module**: `TestingModule`

Defined in: [test-container.ts:37](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/container/test-container.ts#L37)

The `TestingModule` created by `Nest.createTestingModule()`. This will always be defined,
eve in isolated test setups.

##### supertest?

> `optional` **supertest**: `Supertest`

Defined in: [test-container.ts:47](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/container/test-container.ts#L47)

An instance of the `Supertest` class, used for end-to-end testing. This will only be defined
if `enableEndToEnd` is set to `true` in the `TestContainerOptions`.

#### Methods

##### create()

> `static` **create**(`options`): `Promise`\<[`TestContainer`](container.md#testcontainer)\>

Defined in: [test-container.ts:69](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/container/test-container.ts#L69)

Creates a new instance of `TestContainer`, allowing both isolated and integrated
testing of application components.

###### Parameters

###### options

[`TestContainerOptions`](container.md#testcontaineroptions)

The options to use when creating the test container.

###### Returns

`Promise`\<[`TestContainer`](container.md#testcontainer)\>

###### Example

```ts
const container = await TestContainer.create({
  imports: [MyModule],
  controllers: [MyController],
  providers: [MyService],
});
// ... Your test implementation here
```

## Interfaces

### TestContainerOptions

Defined in: [types.ts:8](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/container/types.ts#L8)

Options to provide to `TestContainer`.

#### Properties

##### afterCreate()?

> `optional` **afterCreate**: (`container`) => `void`

Defined in: [types.ts:41](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/container/types.ts#L41)

A function that will be called after the container has been created. This is useful for
performing any additional setup that may be required.

###### Parameters

###### container

[`TestContainer`](container.md#testcontainer)

###### Returns

`void`

##### controllers?

> `optional` **controllers**: `Type`\<`object`\>[]

Defined in: [types.ts:16](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/container/types.ts#L16)

List of controllers to register.

##### enableEndToEnd?

> `optional` **enableEndToEnd**: `boolean`

Defined in: [types.ts:29](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/container/types.ts#L29)

Whether to enable end-to-end testing. If set to `true`

###### Default

```ts
false;
```

##### imports?

> `optional` **imports**: `any`[]

Defined in: [types.ts:12](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/container/types.ts#L12)

List of modules to import.

##### logger?

> `optional` **logger**: `LoggerService`

Defined in: [types.ts:24](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/container/types.ts#L24)

Logger service to use.

##### providers?

> `optional` **providers**: `Provider`\<`object`\>[]

Defined in: [types.ts:20](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/container/types.ts#L20)

List of providers to register.

##### session?

> `optional` **session**: `SessionResource`

Defined in: [types.ts:36](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/container/types.ts#L36)

A session to pass to the `Supertest` instance when testing end-to-end. Does nothing if
`enableEndToEnd` is set to `false`. You may also provide a session on each request. The
session will be used to simulate authenticated and possibly authorized requests. Session
must contain at least `sub` to be considered an authenticated session.
