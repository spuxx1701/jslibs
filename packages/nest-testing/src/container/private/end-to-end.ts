import { INestApplication } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { TestingModule } from '@nestjs/testing';

/**
 * Creates a NestApplication that is suitable for (almost) complete end-to-end testing.
 * It will still mock some things (e.g. express-oidc) that will only work in live runtime.
 * @param module The testing module.
 * @returns The application.
 */
export const createEndToEndNestApplication = async (
  module: TestingModule,
): Promise<INestApplication> => {
  const app = module.createNestApplication();
  app.useGlobalFilters(new BaseExceptionFilter());
  await app.init();
  return app;
};
