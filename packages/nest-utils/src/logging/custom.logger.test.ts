import { TestAppLogger } from '@spuxx/nest-testing';
import { ApplicationLogLevel, CustomLogger } from './custom.logger';

describe('CustomLogger', () => {
  describe('construction', () => {
    it('should be ok', () => {
      const logger = new CustomLogger();
      expect(logger).toBeDefined();
      expect(logger).toBeInstanceOf(CustomLogger);
    });

    it("should set the context if it's provided", () => {
      const logger = new CustomLogger({ context: 'test' });
      expect(logger.getContext()).toEqual('test');
    });
  });

  describe('ApplicationLogLevel', () => {
    it('should log the expected amount of messages with default logging enabled', () => {
      const logger = new TestAppLogger({
        logLevel: ApplicationLogLevel.Default,
      });
      logger.debug('hello world');
      logger.verbose('hello world');
      logger.log('hello world');
      logger.warn('hello world');
      logger.error('hello world');
      logger.fatal('hello world');
      expect(logger.printMessages).toHaveBeenCalledTimes(4);
    });

    it('should log the expected amount of messages with verbose logging enabled', () => {
      const logger = new TestAppLogger({
        logLevel: ApplicationLogLevel.Verbose,
      });
      logger.debug('hello world');
      logger.verbose('hello world');
      logger.log('hello world');
      logger.warn('hello world');
      logger.error('hello world');
      logger.fatal('hello world');
      expect(logger.printMessages).toHaveBeenCalledTimes(6);
    });
  });

  describe('setLogLevel', () => {
    it('should allow changing the log level during runtime', () => {
      const logger = new TestAppLogger({
        logLevel: ApplicationLogLevel.Default,
      });
      logger.verbose("You can't see me");
      expect(logger.printMessages).toHaveBeenCalledTimes(0);
      logger.setLogLevel(ApplicationLogLevel.Verbose);
      logger.verbose('You can see me');
      expect(logger.printMessages).toHaveBeenCalledTimes(1);
    });
  });
});
