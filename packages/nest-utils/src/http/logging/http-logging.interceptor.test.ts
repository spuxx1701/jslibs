import { describe, beforeEach, it, expect } from 'vitest';
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { HttpLoggingInterceptor } from './http-logging.interceptor';
import { Supertest, TestAppLogger, TestContainer } from '@spuxx/nest-testing';
import { ApplicationLogLevel } from '../../logging';

describe('HttpLoggingInterceptor', () => {
  let supertest: Supertest;
  let logger: TestAppLogger;

  @Controller()
  class TestController {
    @Get('hello')
    @UseInterceptors(new HttpLoggingInterceptor())
    hello() {
      return 'Hello World!';
    }
  }

  beforeEach(async () => {
    logger = new TestAppLogger();
    const container = await TestContainer.create({
      controllers: [TestController],
      logger,
      enableEndToEnd: true,
    });
    supertest = container.supertest;
    logger.clear();
  });

  it('should log both request and response', async () => {
    logger.setLogLevel(ApplicationLogLevel.Verbose);
    expect(logger.printMessages).toHaveBeenCalledTimes(0);
    await supertest.get('/hello');
    expect(logger.printMessages).toHaveBeenCalledTimes(2);
  });

  it('should log nothing when verbose logging is not enabled', async () => {
    await supertest.get('/hello');
    expect(logger.printMessages).toHaveBeenCalledTimes(0);
  });
});
