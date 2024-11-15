import { DynamicModule, ForwardReference, LoggerService, Provider, Type } from '@nestjs/common';
import { AuthOptions, SessionResource } from '@spuxx/nest-utils';
import { TestContainer } from './test-container';

/**
 * Options to provide to `TestContainer`.
 */
export interface TestContainerOptions {
  /**
   * List of modules to import.
   */
  imports?: (Type<object> | DynamicModule | Promise<DynamicModule> | ForwardReference<object>)[];
  /**
   * List of controllers to register.
   */
  controllers?: Type<object>[];
  /**
   * List of providers to register.
   */
  providers?: Provider<object>[];
  /**
   * Logger service to use.
   */
  logger?: LoggerService;
  /**
   * A limited set of authentication options. When provided, the container will bootstrap and
   * register `AuthModule` with the given set of options while mocking `express-openid-connect`.
   *
   * ⚠️ Do not manually import `AuthModule` when calling `TestContainer.create()` or the container
   * will break.
   */
  authOptions?: Omit<AuthOptions, 'oidc'>;
  /**
   * Whether to enable end-to-end testing. If set to `true`
   * @default false
   */
  enableEndToEnd?: boolean;
  /**
   * A session to pass to the `Supertest` instance when testing end-to-end. Does nothing if
   * `enableEndToEnd` is set to `false`. You may also provide a session on each request. The
   * session will be used to simulate authenticated and possibly authorized requests. Session
   * must contain at least `sub` to be considered an authenticated session.
   */
  session?: Partial<SessionResource>;
  /**
   * A function that will be called after the container has been created. This is useful for
   * performing any additional setup that may be required.
   */
  afterCreate?: (container: TestContainer) => void;
}
