import { CustomLogger } from '@spuxx/nest-utils';
import { vitest } from 'vitest';

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
  /**
   * The messages that have been logged. Clear with `clear()`.
   */
  messages: unknown[] = [];

  printMessages = vitest.fn((messages: unknown[]) => this.messages.push(messages));

  /**
   * Clears `messages` and all calls to `printMessages`.
   */
  clear = () => {
    this.printMessages.mockClear();
    this.messages = [];
  };
}
