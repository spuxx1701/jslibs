import { DynamicModule, ForwardReference, LoggerService, Provider, Type } from '@nestjs/common';

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
   * Whether to enable end-to-end testing. If set to `true`
   * @default false
   */
  enableEndToEnd?: boolean;
}
