## Classes

### AuthGuard

Defined in: [guards/auth.guard.ts:27](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/guards/auth.guard.ts#L27)

Use this guard on a route to protect the route and only allow authenticated users
to access it. By default, it will allow all authenticated users that possess _any_
of the roles defined in `AuthRole` to use the route. You can further limit route access
by using the guard together with the `@Roles` decorator like so:

#### Example

```ts
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

＠UseGuards(AuthGuard)
＠Roles(["admin", "user"])
```

#### Implements

- `unknown`

#### Constructors

##### new AuthGuard()

> **new AuthGuard**(`reflector`, `service`): [`AuthGuard`](auth.md#authguard)

Defined in: [guards/auth.guard.ts:28](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/guards/auth.guard.ts#L28)

###### Parameters

###### reflector

`Reflector`

###### service

[`AuthService`](auth.md#authservice)

###### Returns

[`AuthGuard`](auth.md#authguard)

#### Accessors

##### options

###### Get Signature

> **get** **options**(): [`AuthOptions`](auth.md#authoptions)

Defined in: [guards/auth.guard.ts:120](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/guards/auth.guard.ts#L120)

###### Returns

[`AuthOptions`](auth.md#authoptions)

#### Methods

##### canActivate()

> **canActivate**(`context`): `boolean`

Defined in: [guards/auth.guard.ts:39](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/guards/auth.guard.ts#L39)

Is triggered when the guarded function is being executed. If it returns false,
the guarded function will not be entered.

###### Parameters

###### context

`ExecutionContext`

The execution context.

###### Returns

`boolean`

Whether the guarded function may be entered.

---

### AuthModule

Defined in: [auth.module.ts:42](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/auth.module.ts#L42)

The authentication module. This module is responsible for handling authentication and
authorization. It is based on the `express-openid-connect` library and is intended
for use with an OIDC provider.

#### Example

```ts
// main.ts
import { AuthModule, AuthOptions } from '@nestjs-oidc/core';
import { auth } from "express-openid-connect";
const authConfig: AuthOptions = {
  // This is the minimum set of options you need to provide
  roles: {
    admin: "admin",
    user: "user",
    // ... more roles ...
  },
  oidc: {
    issuerBaseURL: 'https://example.com',
    baseURL: 'http://localhost:3000',
    clientID: 'client-id',
    clientSecret: 'client-secret',
    secret: 'session-secret',
  }
}
await AuthModule.bootstrap(app, auth, authConfig);

// app.module.ts
import { AuthModule } from '@nestjs-oidc/core';
＠Module({
  imports: [AuthModule.forRoot(authConfig)],
})
export class AppModule {}
```

#### Constructors

##### new AuthModule()

> **new AuthModule**(): [`AuthModule`](auth.md#authmodule)

###### Returns

[`AuthModule`](auth.md#authmodule)

#### Methods

##### bootstrap()

> `static` **bootstrap**(`app`, `auth`, `options`): `Promise`\<`void`\>

Defined in: [auth.module.ts:49](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/auth.module.ts#L49)

Bootstraps authentication. This must be called during application bootstrapping.

###### Parameters

###### app

`INestApplication`

The Nest application instance.

###### auth

(`params`?) => `RequestHandler`

The `auth` middleware function provided by `express-openid-connect`.

###### options

`AuthOptions`

The authentication options.

###### Returns

`Promise`\<`void`\>

##### forRoot()

> `static` **forRoot**(`options`): `DynamicModule`

Defined in: [auth.module.ts:67](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/auth.module.ts#L67)

###### Parameters

###### options

`AuthOptions`

###### Returns

`DynamicModule`

##### mergeOptionsWithDefaultValues()

> `static` **mergeOptionsWithDefaultValues**(`options`): `AuthOptions`

Defined in: [auth.module.ts:84](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/auth.module.ts#L84)

###### Parameters

###### options

`AuthOptions`

###### Returns

`AuthOptions`

---

### AuthService

Defined in: [providers/auth.service.ts:13](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/providers/auth.service.ts#L13)

The authentication service.

#### Constructors

##### new AuthService()

> **new AuthService**(`options`): [`AuthService`](auth.md#authservice)

Defined in: [providers/auth.service.ts:14](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/providers/auth.service.ts#L14)

###### Parameters

###### options

[`AuthOptions`](auth.md#authoptions)

###### Returns

[`AuthService`](auth.md#authservice)

#### Properties

##### options

> `readonly` **options**: [`AuthOptions`](auth.md#authoptions)

Defined in: [providers/auth.service.ts:14](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/providers/auth.service.ts#L14)

#### Methods

##### getSession()

> **getSession**(`request`): [`SessionResource`](auth.md#sessionresource)

Defined in: [providers/auth.service.ts:43](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/providers/auth.service.ts#L43)

Extracts session details from the request object.

###### Parameters

###### request

`Request`

The express request object.

###### Returns

[`SessionResource`](auth.md#sessionresource)

The session resource.

##### handleLogin()

> **handleLogin**(`response`, `options`): `Promise`\<`void`\>

Defined in: [providers/auth.service.ts:21](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/providers/auth.service.ts#L21)

Handles incoming login requests. Will redirect to the IDP's login page.

###### Parameters

###### response

`Response`

The response object.

###### options

###### returnTo?

`string`

(optional) If provided, will attempt to redirect to the given URL after login.

###### Returns

`Promise`\<`void`\>

##### handleLogout()

> **handleLogout**(`response`, `options`): `Promise`\<`void`\>

Defined in: [providers/auth.service.ts:32](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/providers/auth.service.ts#L32)

Handles incoming logout requests.

###### Parameters

###### response

`Response`

The response object.

###### options

###### returnTo?

`string`

(optional) If provided, will attempt to redirect to the given URL after logout.

###### Returns

`Promise`\<`void`\>

---

### SessionResource

Defined in: [resources/session.resource.ts:5](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/resources/session.resource.ts#L5)

#### Constructors

##### new SessionResource()

> **new SessionResource**(): [`SessionResource`](auth.md#sessionresource)

###### Returns

[`SessionResource`](auth.md#sessionresource)

#### Properties

##### email

> **email**: `string`

Defined in: [resources/session.resource.ts:53](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/resources/session.resource.ts#L53)

##### email_verified

> **email_verified**: `boolean`

Defined in: [resources/session.resource.ts:60](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/resources/session.resource.ts#L60)

##### family_name

> **family_name**: `string`

Defined in: [resources/session.resource.ts:46](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/resources/session.resource.ts#L46)

##### given_name

> **given_name**: `string`

Defined in: [resources/session.resource.ts:39](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/resources/session.resource.ts#L39)

##### groups

> **groups**: `string`[]

Defined in: [resources/session.resource.ts:78](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/resources/session.resource.ts#L78)

##### locale

> **locale**: `string`

Defined in: [resources/session.resource.ts:67](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/resources/session.resource.ts#L67)

##### name

> **name**: `string`

Defined in: [resources/session.resource.ts:32](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/resources/session.resource.ts#L32)

##### preferred_username

> **preferred_username**: `string`

Defined in: [resources/session.resource.ts:25](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/resources/session.resource.ts#L25)

##### sid

> **sid**: `string`

Defined in: [resources/session.resource.ts:18](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/resources/session.resource.ts#L18)

##### sub

> **sub**: `string`

Defined in: [resources/session.resource.ts:11](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/resources/session.resource.ts#L11)

## Interfaces

### AuthOptions

Defined in: [config/auth.options.ts:4](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/config/auth.options.ts#L4)

#### Properties

##### allowedRedirectHostnames?

> `optional` **allowedRedirectHostnames**: `string`[]

Defined in: [config/auth.options.ts:15](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/config/auth.options.ts#L15)

The list of external hostnames the service is allowed to redirect to after login or logout.
Local redirects are always allowed.

###### Default

```ts
[];
```

##### defaultRedirectUrl?

> `optional` **defaultRedirectUrl**: `string`

Defined in: [config/auth.options.ts:20](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/config/auth.options.ts#L20)

The URL that should be used as the default redirect URL after login or logout.

###### Default

```ts
'auth/session';
```

##### disable?

> `optional` **disable**: `boolean`

Defined in: [config/auth.options.ts:9](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/config/auth.options.ts#L9)

Whether authentication should be disabled.

###### Default

```ts
false;
```

##### oidc?

> `optional` **oidc**: `ExpressOidcConfig`

Defined in: [config/auth.options.ts:29](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/config/auth.options.ts#L29)

Configuration parameters passed to `express-openid-connect`. For documentation, see:
https://auth0.github.io/express-openid-connect/interfaces/ConfigParams.html

##### roles?

> `optional` **roles**: `Record`\<`string`, `string`\>

Defined in: [config/auth.options.ts:24](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/config/auth.options.ts#L24)

The record of roles available in the application.

## Variables

### defaultAuthOptions

> `const` **defaultAuthOptions**: `DefaultAuthOptions`

Defined in: [config/auth.options.ts:37](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/config/auth.options.ts#L37)

Default values for the authentication options.

## Functions

### getSession()

> **getSession**(`request`): [`SessionResource`](auth.md#sessionresource)

Defined in: [utils/auth.utils.ts:9](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/utils/auth.utils.ts#L9)

Attempts to extract the user session from the given request.

#### Parameters

##### request

`Request`

The request.

#### Returns

[`SessionResource`](auth.md#sessionresource)

The user session or undefined if there is non.

---

### isAuthenticated()

> **isAuthenticated**(`request`): `boolean`

Defined in: [utils/auth.utils.ts:18](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/utils/auth.utils.ts#L18)

Checks whether the given request is authenticated.

#### Parameters

##### request

`Request`

The request.

#### Returns

`boolean`

Whether the request is authenticated.

---

### Roles()

> **Roles**(...`roles`): `any`

Defined in: [decorators/roles.decorator.ts:25](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/nest-utils/src/auth/decorators/roles.decorator.ts#L25)

Use this decorator together with `AuthGuard` and specify required roles
as arguments. All specified roles will be required since `AuthGuard` implicitly
applies an 'and' condition.

#### Parameters

##### roles

...`string`[]

The required roles.

#### Returns

`any`

#### Example

```ts
import { UseGuards } from '@nestjs/common';
import { AuthGuard, Roles } from '@spuxx/nest-utils';

＠UseGuards(AuthGuard)
＠Roles("admin", "user")

// When applying roles both on the controller and a method, the method decorator will "win"
Controller()
＠UseGuards(AuthGuard)
＠Roles("admin")
export class MyController {
  ＠UseGuards(AuthGuard)
  ＠Roles("user") // Only "user" will be required
  doSomething() {}
}
```
