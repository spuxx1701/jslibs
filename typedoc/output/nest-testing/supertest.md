

## Classes

### Supertest

Defined in: [supertest.ts:25](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/supertest/supertest.ts#L25)

`Supertest` is an abstraction of the `supertest` package that allows easily faking
incoming HTTP requests during tests.

#### Param

The Nest application instance to test.

#### Param

(optional) The session to use for the request. Session must contain at least
`sub` to be considered an authenticated session.

#### Example

```ts
// Assuming you already have an instance of `INestApplication`
const supertest = new Supertest(app);
const response = await supertest.get('/hello');
// ... assertions ...

// Or simply retrieve the `supertest` instance from your instance of `TestContainer`
const container = await TestContainer.create({
  enableEndToEnd: true,
});
const supertest = container.supertest;
```

#### Constructors

##### new Supertest()

> **new Supertest**(`app`, `session`?): [`Supertest`](supertest.md#supertest)

Defined in: [supertest.ts:26](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/supertest/supertest.ts#L26)

###### Parameters

###### app

`INestApplication`

###### session?

`SessionResource`

###### Returns

[`Supertest`](supertest.md#supertest)

#### Methods

##### delete()

> **delete**(`url`, `options`?): `Request`

Defined in: [supertest.ts:85](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/supertest/supertest.ts#L85)

Emits a fake `DELETE` request.

###### Parameters

###### url

`string`

The request URL.

###### options?

[`SupertestOptions`](supertest.md#supertestoptions)

(optional) Additional options.

###### Returns

`Request`

The request.

##### get()

> **get**(`url`, `options`?): `Request`

Defined in: [supertest.ts:37](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/supertest/supertest.ts#L37)

Emits a fake `GET` request.

###### Parameters

###### url

`string`

The request URL.

###### options?

[`SupertestOptions`](supertest.md#supertestoptions)

(optional) Additional options.

###### Returns

`Request`

The request.

##### options()

> **options**(`url`, `options`?): `Request`

Defined in: [supertest.ts:97](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/supertest/supertest.ts#L97)

Emits a fake `OPTIONS` request.

###### Parameters

###### url

`string`

The request URL.

###### options?

[`SupertestOptions`](supertest.md#supertestoptions)

(optional) Additional options.

###### Returns

`Request`

The request.

##### patch()

> **patch**(`url`, `options`?): `Request`

Defined in: [supertest.ts:73](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/supertest/supertest.ts#L73)

Emits a fake `PATCH` request.

###### Parameters

###### url

`string`

The request URL.

###### options?

[`SupertestOptions`](supertest.md#supertestoptions)

(optional) Additional options.

###### Returns

`Request`

The request.

##### post()

> **post**(`url`, `options`?): `Request`

Defined in: [supertest.ts:49](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/supertest/supertest.ts#L49)

Emits a fake `POST` request.

###### Parameters

###### url

`string`

The request URL.

###### options?

[`SupertestOptions`](supertest.md#supertestoptions)

(optional) Additional options.

###### Returns

`Request`

The request.

##### put()

> **put**(`url`, `options`?): `Request`

Defined in: [supertest.ts:61](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/supertest/supertest.ts#L61)

Emits a fake `PUT` request.

###### Parameters

###### url

`string`

The request URL.

###### options?

[`SupertestOptions`](supertest.md#supertestoptions)

(optional) Additional options.

###### Returns

`Request`

The request.

## Interfaces

### SupertestOptions

Defined in: [types.ts:3](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/supertest/types.ts#L3)

#### Properties

##### body?

> `optional` **body**: `object`

Defined in: [types.ts:12](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/supertest/types.ts#L12)

The request body.

##### session?

> `optional` **session**: `SessionResource`

Defined in: [types.ts:8](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-testing/src/supertest/types.ts#L8)

The session resource that should be attached to the request. May be used to simulate
authenticated or authorized requests.
