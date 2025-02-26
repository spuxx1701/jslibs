## Classes

### HttpLoggingInterceptor

Defined in: [http-logging.interceptor.ts:26](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/http/logging/http-logging.interceptor.ts#L26)

`HttpLoggingInterceptor` logs incoming HTTP requests.

#### Example

```ts
import { Controller, UseInterceptors } from '@nestjs/common';
import { HttpLoggingInterceptor } from '@src/http/logging/logging.interceptor';
// Apply globally...
app.useGlobalInterceptors(new HttpLoggingInterceptor());

// ...or to a controller...
＠Controller()
＠UseInterceptors(HttpLoggingInterceptor)
export class MyController {}

// ...or to a single entrypoint
export class MyController {
  ＠Get('cats')
  ＠UseInterceptors(HttpLoggingInterceptor)
  getCats() {}
}
```

#### Implements

- `unknown`

#### Constructors

##### new HttpLoggingInterceptor()

> **new HttpLoggingInterceptor**(): [`HttpLoggingInterceptor`](http.md#httplogginginterceptor)

###### Returns

[`HttpLoggingInterceptor`](http.md#httplogginginterceptor)

#### Methods

##### intercept()

> **intercept**(`context`, `next`): `Observable`\<`object`\>

Defined in: [http-logging.interceptor.ts:27](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/http/logging/http-logging.interceptor.ts#L27)

###### Parameters

###### context

`ExecutionContext`

###### next

`CallHandler`

###### Returns

`Observable`\<`object`\>
