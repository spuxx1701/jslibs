import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Logger.log(`Application is running on: http://localhost:3000`, 'Bootstrap');
  // Required, see: https://www.npmjs.com/package/vite-plugin-node#get-started
  if (import.meta.env.PROD) {
    await app.listen(3000);
  }
  return app;
}

export const app = bootstrap();
