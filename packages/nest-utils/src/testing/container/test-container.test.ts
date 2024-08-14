import { Controller, Injectable, Module } from '@nestjs/common';
import { TestContainer } from './test-container';

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
    });
    const { module } = container;

    expect(container).toBeInstanceOf(TestContainer);
    expect(module).toBeDefined();
    expect(module.get(TestController)).toBeInstanceOf(TestController);
    expect(module.get(TestService)).toBeInstanceOf(TestService);
    expect(module.get(TestModule)).toBeInstanceOf(TestModule);
  });
});
