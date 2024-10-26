import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { type OmitFunctionMembers } from '@spuxx/js-utils';
import { AuthOptions } from '../../auth';
import { AuthModule } from '../../auth/auth.module';
import { Supertest } from '../supertest';
import { createEndToEndNestApplication } from './private/end-to-end';
import { mockExpressOidcPackage, MockOidcModule } from './private/mock-oidc';
import { TestContainerOptions } from './types';
import { MappingModule } from '../../mapping/mapping.module';

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

  private constructor(init: OmitFunctionMembers<TestContainer>, afterCreate?: (container: TestContainer) => void) {
    Object.assign(this, init);
    if (afterCreate) afterCreate(this);
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
    const { imports, controllers, providers, logger, authOptions, enableEndToEnd, afterCreate } = {
      imports: [],
      controllers: [],
      providers: [],
      authOptions: {},
      ...options,
    };

    mockExpressOidcPackage();

    // Auto-add non-conditional components
    imports.push(MappingModule);

    // Auto-add conditional components
    if (enableEndToEnd) {
      imports.push(AuthModule.forRoot(authOptions as AuthOptions), MockOidcModule);
    }

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
      await AuthModule.bootstrap(app, authOptions as AuthOptions);
      supertest = new Supertest(app, options.session);
    }

    // Return the test container
    return new TestContainer({ module, app, supertest }, afterCreate);
  }
}
