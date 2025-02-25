## Functions

### EnvModuleMixin()

> **EnvModuleMixin**\<`TEnv`\>(`env`): _typeof_ `EnvModule`

Defined in: [env.module-mixin.ts:34](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-utils/src/env/env.module-mixin.ts#L34)

A mixin for a NestJS module that provides easy access to environment variables.
The module also handles validation of the environment variables using `class-validator`
on start-up.

#### Type Parameters

• **TEnv** _extends_ `object`

#### Parameters

##### env

(...`args`) => `TEnv`

The class that defines the environment variables.

#### Returns

_typeof_ `EnvModule`

The `EnvModule` class.

#### Example

```ts
// env.module.ts
import { IsNumber, IsString } from 'class-validator';
class Env {
  ＠IsNumber()
  PORT: number; // Will throw an error if not provided in .env file

  ＠IsString()
  GREETING_ROUTE: string = '/hello'; // Will default to '/hello' if not provided in .env file
}
export class EnvModule extends EnvModuleMixin<Env>(Env) {}

// app.module.ts
＠Module({
  imports: [EnvModule.validate()],
})
export class AppModule {}

// You can access any environment variable through EnvModule.get()
console.log(EnvModule.get('PORT')); // This is type-safe!
＠Get(EnvModule.get('GREETING_ROUTE')) // Works with decorators!
```
