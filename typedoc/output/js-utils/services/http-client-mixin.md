## Classes

### HttpError

Defined in: [packages/js-utils/src/services/http-client-mixin/types.ts:70](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/types.ts#L70)

#### Extends

- `Error`

#### Constructors

##### new HttpError()

> **new HttpError**(`init`): [`HttpError`](http-client-mixin.md#httperror)

Defined in: [packages/js-utils/src/services/http-client-mixin/types.ts:74](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/types.ts#L74)

###### Parameters

###### init

[`HttpError`](http-client-mixin.md#httperror)

###### Returns

[`HttpError`](http-client-mixin.md#httperror)

###### Overrides

`Error.constructor`

#### Properties

##### body?

> `optional` **body**: `string` \| `object`

Defined in: [packages/js-utils/src/services/http-client-mixin/types.ts:72](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/types.ts#L72)

##### cause?

> `optional` **cause**: `unknown`

Defined in: node_modules/.pnpm/typescript@5.7.3/node_modules/typescript/lib/lib.es2022.error.d.ts:26

###### Inherited from

`Error.cause`

##### message

> **message**: `string`

Defined in: node_modules/.pnpm/typescript@5.7.3/node_modules/typescript/lib/lib.es5.d.ts:1077

###### Inherited from

`Error.message`

##### name

> **name**: `string`

Defined in: node_modules/.pnpm/typescript@5.7.3/node_modules/typescript/lib/lib.es5.d.ts:1076

###### Inherited from

`Error.name`

##### stack?

> `optional` **stack**: `string`

Defined in: node_modules/.pnpm/typescript@5.7.3/node_modules/typescript/lib/lib.es5.d.ts:1078

###### Inherited from

`Error.stack`

##### status?

> `optional` **status**: `number`

Defined in: [packages/js-utils/src/services/http-client-mixin/types.ts:71](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/types.ts#L71)

##### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node_modules/.pnpm/@types+node@22.5.2/node_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

###### Parameters

###### err

`Error`

###### stackTraces

`CallSite`[]

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

`Error.prepareStackTrace`

##### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node_modules/.pnpm/@types+node@22.5.2/node_modules/@types/node/globals.d.ts:145

###### Inherited from

`Error.stackTraceLimit`

#### Methods

##### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Defined in: node_modules/.pnpm/@types+node@22.5.2/node_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

`Error.captureStackTrace`

## Interfaces

### EndpointDefinition\<TFunction, TTransformedResult\>

Defined in: [packages/js-utils/src/services/http-client-mixin/types.ts:29](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/types.ts#L29)

The definition of an endpoint to be used by `HttpClient`.

#### Type Parameters

• **TFunction** _extends_ [`EndpointFunction`](http-client-mixin.md#endpointfunction) = [`EndpointFunction`](http-client-mixin.md#endpointfunction)

• **TTransformedResult** = `any`

#### Properties

##### errorHandlers?

> `optional` **errorHandlers**: [`ErrorHandler`](http-client-mixin.md#errorhandler)[]

Defined in: [packages/js-utils/src/services/http-client-mixin/types.ts:47](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/types.ts#L47)

The set of error handlers for this endpoint. These local error handlers will be called
before the global error handlers.

##### function

> **function**: `TFunction`

Defined in: [packages/js-utils/src/services/http-client-mixin/types.ts:36](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/types.ts#L36)

The function that will be called when the endpoint is invoked.

##### transformer()?

> `optional` **transformer**: (`response`) => `TTransformedResult`

Defined in: [packages/js-utils/src/services/http-client-mixin/types.ts:42](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/types.ts#L42)

A function that will be called to transform the response from the server.
The transformer will be called implicitly after the original promise has
resolved.

###### Parameters

###### response

`Awaited`\<`ReturnType`\<`TFunction`\>\>

###### Returns

`TTransformedResult`

---

### HttpClientOptions\<TEndpoints\>

Defined in: [packages/js-utils/src/services/http-client-mixin/types.ts:57](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/types.ts#L57)

The options to hand over to `HttpClient`.

#### Type Parameters

• **TEndpoints** _extends_ [`Endpoints`](http-client-mixin.md#endpoints-1)

#### Properties

##### endpoints

> **endpoints**: `TEndpoints`

Defined in: [packages/js-utils/src/services/http-client-mixin/types.ts:61](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/types.ts#L61)

The set of endpoints to be used by the client.

##### globalErrorHandlers?

> `optional` **globalErrorHandlers**: [`ErrorHandler`](http-client-mixin.md#errorhandler)[]

Defined in: [packages/js-utils/src/services/http-client-mixin/types.ts:67](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/types.ts#L67)

A set of global error handlers. These will be called for every error that occurs,
regardless of the endpoint. These global error handlers will be called after any
local error handlers.

## Type Aliases

### EndpointFunction()

> **EndpointFunction**: (...`args`) => `Promise`\<`any`\>

Defined in: [packages/js-utils/src/services/http-client-mixin/types.ts:24](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/types.ts#L24)

#### Parameters

##### args

...`any`[]

#### Returns

`Promise`\<`any`\>

---

### Endpoints

> **Endpoints**: `Record`\<`string`, [`EndpointDefinition`](http-client-mixin.md#endpointdefinitiontfunction-ttransformedresult)\>

Defined in: [packages/js-utils/src/services/http-client-mixin/types.ts:52](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/types.ts#L52)

The set of endpoints to be used by `HttpClient`.

---

### ErrorHandler

> **ErrorHandler**: `object`

Defined in: [packages/js-utils/src/services/http-client-mixin/types.ts:6](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/types.ts#L6)

Defines how the client should handle errors.

#### Type declaration

##### continue?

> `optional` **continue**: `boolean`

Whether the client should continue to call subsequent error handlers after this one.

###### Default

```ts
false;
```

##### function()

> **function**: (`error`) => `void` \| `Promise`\<`void`\>

The function to be called when an error occurs.

###### Parameters

###### error

The error.

[`HttpError`](http-client-mixin.md#httperror) | `unknown`

###### Returns

`void` \| `Promise`\<`void`\>

##### statusFilter()?

> `optional` **statusFilter**: (`status`) => `boolean`

The status code of the response that will trigger this error handler. If left empty,
the error handler will be called for all errors.

###### Parameters

###### status

`number`

###### Returns

`boolean`

## Functions

### defineEndpoint()

> **defineEndpoint**\<`TFunction`, `TTransformedResult`\>(`definition`): [`EndpointDefinition`](http-client-mixin.md#endpointdefinitiontfunction-ttransformedresult)\<`TFunction`, `TTransformedResult`\>

Defined in: [packages/js-utils/src/services/http-client-mixin/http-client.service-mixin.ts:26](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/http-client.service-mixin.ts#L26)

A helper function to create an endpoint definition in a type-safe way.

#### Type Parameters

• **TFunction** _extends_ [`EndpointFunction`](http-client-mixin.md#endpointfunction)

• **TTransformedResult** = `Awaited`\<`ReturnType`\<`TFunction`\>\>

#### Parameters

##### definition

[`EndpointDefinition`](http-client-mixin.md#endpointdefinitiontfunction-ttransformedresult)\<`TFunction`, `TTransformedResult`\>

The endpoint definition.

#### Returns

[`EndpointDefinition`](http-client-mixin.md#endpointdefinitiontfunction-ttransformedresult)\<`TFunction`, `TTransformedResult`\>

---

### HttpClientMixin()

> **HttpClientMixin**\<`TEndpoints`\>(`options`): `HttpClient`\<`TEndpoints`\>

Defined in: [packages/js-utils/src/services/http-client-mixin/http-client.service-mixin.ts:62](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/http-client.service-mixin.ts#L62)

A mixin that adds HTTP client functionality to a class. Can be used to create a strongly typed
HTTP client.

#### Type Parameters

• **TEndpoints** _extends_ [`Endpoints`](http-client-mixin.md#endpoints-1)

#### Parameters

##### options

[`HttpClientOptions`](http-client-mixin.md#httpclientoptionstendpoints)\<`TEndpoints`\>

The options for the HTTP client.

#### Returns

`HttpClient`\<`TEndpoints`\>

#### Example

```ts
import { HttpClientMixin, defineEndpoint } from '@spuxx/js-utils';

// Define your endpoints
const endpoints = {
  getRandomJoke: defineEndpoint({
    function: async () => {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
    },
    transformer: async (response: Response}): string => {
      const json = await response.json();
      return json.value;
    },
  }),
}

// Create your client
class HttpClient extends HttpClientMixin({ endpoints }) {}

// Use your client
const joke = await HttpClient.getRandomJoke();
console.log(joke); // Chuck Norris can divide by zero.
```

---

### transformFetchJson()

> **transformFetchJson**\<`TResult`\>(`response`): `Promise`\<`TResult`\>

Defined in: [packages/js-utils/src/services/http-client-mixin/http-client.utils.ts:13](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/http-client-mixin/http-client.utils.ts#L13)

A very simple transformer that will transform the response from a fetch call into a JSON object
and cast it to the specified type. Intended for use with `defineEndpoint`.

#### Type Parameters

• **TResult**

#### Parameters

##### response

`Response`

The response from a fetch call.

#### Returns

`Promise`\<`TResult`\>

The transformed

#### Example

```ts
const endpoint = defineEndpoint({
  function: async (): Response => {
    return fetch('https://example.com/api/users');
  },
  transform: transformFetchJson<User[]>,
```
