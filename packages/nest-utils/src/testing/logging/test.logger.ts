import { CustomLogger } from '../../logging/custom.logger';

/**
 * A custom logger for testing purposes. Replaces `printMessages` with a mocked function
 * that can be spied on.
 * @example
 * const logger = new TestAppLogger();
 * logger.debug('hello world');
 * expect(logger.printMessages).toHaveBeenCalledTimes(1);
 *
 * // Or hand it over to TestContainer
 * const container = await TestContainer.create({
 *   logger,
 *   // ...
 * });
 */
export class TestAppLogger extends CustomLogger {
  printMessages = vitest.fn();
}
