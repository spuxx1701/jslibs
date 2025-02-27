import { describe, it, expect, vi } from 'vitest';
import { IsBooleanString, IsDate, IsNumber, IsString } from 'class-validator';
import { TestContainer } from '@spuxx/nest-testing';
import { EnvModuleMixin } from './env.module-mixin';

describe('registration', () => {
  class Env {
    @IsString()
    SOME_STRING: string;
  }
  class EnvModule extends EnvModuleMixin<Env>(Env) {}

  it('should properly load the environment variables and module', async () => {
    vi.stubEnv('SOME_STRING', 'foo');
    const container = await TestContainer.create({
      imports: [EnvModule.register()],
    });
    const module = container.module.get<EnvModule>(EnvModule);
    expect(module).toBeDefined();
    expect(EnvModule.get('SOME_STRING')).toBe('foo');
  });

  it('should cache environment variables until load() is called again', async () => {
    vi.stubEnv('SOME_STRING', 'foo');
    const container = await TestContainer.create({
      imports: [EnvModule.register()],
    });
    const module = container.module.get<EnvModule>(EnvModule);
    expect(module).toBeDefined();
    expect(EnvModule.get('SOME_STRING')).toBe('foo');
    vi.stubEnv('SOME_STRING', 'bar');
    expect(EnvModule.get('SOME_STRING')).toBe('foo');
    EnvModule.load();
    expect(EnvModule.get('SOME_STRING')).toBe('bar');
  });
});

describe('validation', () => {
  it('should throw an error due to a missing environment variable', async () => {
    vi.unstubAllEnvs();
    class Env {
      @IsString()
      SOME_STRING: string;
    }
    class EnvModule extends EnvModuleMixin<Env>(Env) {}
    expect(() =>
      TestContainer.create({
        imports: [EnvModule.register()],
      }),
    ).toThrowError(`An instance of Env has failed the validation:
 - property SOME_STRING has failed the following constraints: isString`);
  });

  it('should throw an error due to a type mismatch', async () => {
    vi.stubEnv('SOME_BOOLEAN', 'foo');
    class Env {
      @IsBooleanString()
      SOME_BOOLEAN: 'true' | 'false';
    }
    class EnvModule extends EnvModuleMixin<Env>(Env) {}
    expect(() =>
      TestContainer.create({
        imports: [EnvModule.register()],
      }),
    ).toThrowError(`An instance of Env has failed the validation:
 - property SOME_BOOLEAN has failed the following constraints: isBooleanString`);
  });

  it('should implicitly perform certain conversions', async () => {
    vi.stubEnv('SOME_DATE', '2024-08-13T17:34:00Z');
    vi.stubEnv('SOME_NUMBER', '123');
    class Env {
      @IsDate()
      SOME_DATE: Date;
      @IsNumber()
      SOME_NUMBER: number;
    }
    class EnvModule extends EnvModuleMixin<Env>(Env) {}
    await TestContainer.create({
      imports: [EnvModule.register()],
    });
    expect(EnvModule.get('SOME_DATE')).toEqual(new Date('2024-08-13T17:34:00Z'));
    expect(EnvModule.get('SOME_NUMBER')).toBe(123);
  });
});

describe('decorators', () => {
  it('should work with decorators', () => {
    vi.stubEnv('HELLO_ROUTE', '/hello');
  });
});
