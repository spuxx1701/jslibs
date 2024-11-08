import { AuthService } from 'packages/nest-utils/dist/main';
import { TestContainer } from './test-container';
import { Controller, Injectable, Module } from '@nestjs/common';

describe('TestContainer', () => {
  it('should create a test container with the given dependencies', async () => {
    @Controller()
    class TestController {}

    @Injectable()
    class TestService {}

    @Module({})
    class TestModule {}

    const container = await TestContainer.create({
      controllers: [TestController],
      providers: [TestService],
      imports: [TestModule],
      enableEndToEnd: true,
    });
    const { module, app } = container;

    expect(container).toBeInstanceOf(TestContainer);
    expect(module).toBeDefined();
    expect(app).toBeDefined();
    expect(app.get(TestController)).toBeInstanceOf(TestController);
    expect(app.get(TestService)).toBeInstanceOf(TestService);
    expect(app.get(TestModule)).toBeInstanceOf(TestModule);
    expect(app.get(AuthService)).toBeInstanceOf(AuthService);
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
