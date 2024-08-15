import { Logger, Module } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { config } from 'dotenv';

export function EnvModuleMixin<TEnv extends object>(env: new (...args: unknown[]) => TEnv) {
  @Module({})
  class EnvModule {
    static get env(): TEnv {
      config();
      return plainToInstance(env, process.env, {
        enableImplicitConversion: true,
      });
    }

    constructor() {
      EnvModule.validate();
    }

    /**
     * Validates the currently stored instance of the environment class.
     */
    static validate(): void {
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
    }

    /**
     * Returns the value of the environment variable with the given key.
     * @param key The key of the environment variable.
     * @returns The value of the environment variable.
     */
    static get<TKey extends keyof TEnv>(key: TKey): TEnv[TKey] {
      return EnvModule.env[key];
    }
  }

  return EnvModule;
}
