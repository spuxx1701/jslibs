import { Controller, Get, Injectable, Module } from '@nestjs/common';
import { TestContainer } from './test-container';
import {
  AUTH_OPTIONS_KEY,
  AuthModule,
  AuthService,
  defaultAuthOptions,
  Mapper,
} from '@spuxx/nest-utils';
import { describe, expect, it, vi } from 'vitest';

describe('TestContainer', () => {
  @Controller()
  class TestController {
    @Get('hi')
    sayHi() {
      return { message: 'Hi mom!' };
    }
  }

  @Injectable()
  class TestService {}

  @Module({})
  class TestModule {}

  it('should create a test container with the given dependencies', async () => {
    const container = await TestContainer.create({
      controllers: [TestController],
      providers: [TestService],
      imports: [TestModule],
    });
    const { module } = container;

    expect(container).toBeInstanceOf(TestContainer);
    expect(module).toBeDefined();
    expect(module.get(TestController)).toBeInstanceOf(TestController);
    expect(module.get(TestService)).toBeInstanceOf(TestService);
    expect(module.get(TestModule)).toBeInstanceOf(TestModule);
    // MappingModule should be registered automatically
    expect(module.get(Mapper)).toBeInstanceOf(Mapper);
  });

  it('should create a container that supports end-to-end testing', async () => {
    const container = await TestContainer.create({
      controllers: [TestController],
      providers: [TestService],
      imports: [TestModule],
      enableEndToEnd: true,
    });
    const { app, supertest } = container;

    expect(app).toBeDefined();
    expect(app.get(TestController)).toBeInstanceOf(TestController);
    expect(app.get(TestService)).toBeInstanceOf(TestService);
    expect(app.get(TestModule)).toBeInstanceOf(TestModule);
    expect((await supertest.get('/hi')).body).toEqual({ message: 'Hi mom!' });
  });

  it('should automatically bootstrap AuthModule if provided', async () => {
    const bootstrapSpy = vi.spyOn(AuthModule, 'bootstrap');
    expect(bootstrapSpy).not.toHaveBeenCalled();
    const container = await TestContainer.create({
      controllers: [TestController],
      providers: [TestService],
      imports: [TestModule, AuthModule.forRoot({})],
      enableEndToEnd: true,
    });
    const { app, supertest } = container;

    expect(app).toBeDefined();
    expect(app.get(TestController)).toBeInstanceOf(TestController);
    expect(app.get(TestService)).toBeInstanceOf(TestService);
    expect(app.get(TestModule)).toBeInstanceOf(TestModule);
    expect(app.get(AuthService)).toBeInstanceOf(AuthService);
    expect(app.get(AUTH_OPTIONS_KEY)).toEqual(defaultAuthOptions);
    expect(bootstrapSpy).toHaveBeenCalledTimes(1);
    expect((await supertest.get('/hi')).body).toEqual({ message: 'Hi mom!' });
  });

  it('should also detect AuthModule recursively', async () => {
    @Module({
      controllers: [TestController],
      imports: [AuthModule.forRoot({})],
    })
    class RecursiveModule {}

    const bootstrapSpy = vi.spyOn(AuthModule, 'bootstrap');
    expect(bootstrapSpy).not.toHaveBeenCalled();
    const container = await TestContainer.create({
      imports: [RecursiveModule],
      enableEndToEnd: true,
    });
    const { app, supertest } = container;

    expect(app).toBeDefined();
    expect(app.get(TestController)).toBeInstanceOf(TestController);
    expect(app.get(AuthService)).toBeInstanceOf(AuthService);
    expect(app.get(AUTH_OPTIONS_KEY)).toEqual(defaultAuthOptions);
    expect(bootstrapSpy).toHaveBeenCalledTimes(1);
    expect((await supertest.get('/hi')).body).toEqual({ message: 'Hi mom!' });
  });

  it('should call the afterCreate hook', async () => {
    const afterCreate = vi.fn(() => {});
    expect(afterCreate).toHaveBeenCalledTimes(0);
    await TestContainer.create({
      afterCreate,
    });
    expect(afterCreate).toHaveBeenCalledTimes(1);
  });
});
