import { DynamicModule, Logger, Module } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { config } from 'dotenv';

/**
 * A mixin for a NestJS module that provides easy access to environment variables.
 * The module also handles validation of the environment variables using `class-validator`
 * on start-up.
 * @param env The class that defines the environment variables.
 * @returns The `EnvModule` class.
 * @example
 * // env.module.ts
 * import { IsNumber, IsString } from 'class-validator';
 * class Env {
 *   ＠IsNumber()
 *   PORT: number; // Will throw an error if not provided in .env file
 *
 *   ＠IsString()
 *   GREETING_ROUTE: string = '/hello'; // Will default to '/hello' if not provided in .env file
 * }
 * export class EnvModule extends EnvModuleMixin<Env>(Env) {}
 *
 * // app.module.ts
 * ＠Module({
 *   imports: [EnvModule.validate()],
 * })
 * export class AppModule {}
 *
 * // You can access any environment variable through EnvModule.get()
 * console.log(EnvModule.get('PORT')); // This is type-safe!
 * ＠Get(EnvModule.get('GREETING_ROUTE')) // Works with decorators!
 */
export function EnvModuleMixin<TEnv extends object>(env: new (...args: unknown[]) => TEnv) {
  @Module({})
  class EnvModule {
    static readonly env: TEnv;

    static register(): DynamicModule {
      this.load();
      this.validate();
      return {
        module: this,
      };
    }

    /**
     * (Re-)loads the environment variables. This comes at a performance cost and should only be used
     * when necessary.
     */
    static load(): void {
      config();
      // @ts-expect-error This is the only spot where we're allowed to write to this.env.
      this.env = plainToInstance(env, process.env, {
        enableImplicitConversion: true,
      });
    }

    /**
     * Validates the currently stored instance of the environment class.
     */
    static validate(): EnvModule {
      if (!this.env) EnvModule.load();
      const errors = validateSync(this.env, {
        skipMissingProperties: false,
      });

      if (errors.length > 0) {
        Logger.error(
          'Failed to validate environment variables. Did you forget to provide some that are required?',
          this.constructor.name,
        );
        throw new Error(errors.toString());
      }
      return this;
    }

    /**
     * Returns the value of the environment variable with the given key.
     * @param key The key of the environment variable.
     * @returns The value of the environment variable.
     */
    static get<TKey extends keyof TEnv>(key: TKey): TEnv[TKey] {
      if (!this.env) EnvModule.load();
      return this.env[key];
    }
  }

  return EnvModule;
}
