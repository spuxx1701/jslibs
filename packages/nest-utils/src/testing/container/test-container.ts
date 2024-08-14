import { Test, TestingModule } from '@nestjs/testing';
import { TestContainerOptions } from './types';
import { INestApplication } from '@nestjs/common';
import { createEndToEndNestApplication } from './private/end-to-end';
import { Supertest } from '../supertest';

/**
 * `TestContainer` provides an abstraction of `Nest.createTestContainer()`, offering
 * a custom API for easier handling and use. For more information on testing in NestJS,
 * see https://docs.nestjs.com/fundamentals/testing.
 * @example
 * // Isolated test
 * const container = await TestContainer.create({
 *   providers: [MyService],
 * });
 * const service = container.get(MyService);
 * // ... Your test implementation here
 *
 * // End-to-end test
 * const container = await TestContainer.create({
 *   controllers: [MyController],
 *   providers: [MyService],
 *   enableEndToEnd: true,
 * });
 * const { supertest } = container;
 * // ... Your test implementation here
 */
export class TestContainer {
  /**
   * The `TestingModule` created by `Nest.createTestingModule()`. This will always be defined,
   * eve in isolated test setups.
   */
  module: TestingModule;
  /**
   * The Nest application created by `NestFactory.create()`. This will only be defined if
   * `enableEndToEnd` is set to `true` in the `TestContainerOptions`.
   */
  app?: INestApplication;
  /**
   * An instance of the `Supertest` class, used for end-to-end testing. This will only be defined
   * if `enableEndToEnd` is set to `true` in the `TestContainerOptions`.
   */
  supertest?: Supertest;

  private constructor(init: TestContainer) {
    Object.assign(this, init);
  }

  /**
   * Creates a new instance of `TestContainer`, allowing both isolated and integrated
   * testing of application components.
   * @param options The options to use when creating the test container.
   * @example
   * const container = await TestContainer.create({
   *   imports: [MyModule],
   *   controllers: [MyController],
   *   providers: [MyService],
   * });
   * // ... Your test implementation here
   */
  static async create(options: TestContainerOptions) {
    const { imports, controllers, providers, logger, enableEndToEnd } = options;

    // Create the precompiled version of the module
    let builder = Test.createTestingModule({
      imports,
      controllers,
      providers,
    });

    // If a custom logger has been provided, we'll override the module's logger
    if (logger) {
      builder = builder.setLogger(logger);
    }

    // Compile the module
    const module = await builder.compile();

    // Enable end-to-end testing if requested
    let app: INestApplication | undefined;
    let supertest: Supertest | undefined;
    if (enableEndToEnd) {
      app = await createEndToEndNestApplication(module);
      supertest = new Supertest(app);
    }
    // Return the test container
    return new TestContainer({ module, app, supertest });
  }
}
