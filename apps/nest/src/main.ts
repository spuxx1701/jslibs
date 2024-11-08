import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CustomLogger, AuthModule } from '@spuxx/nest-utils';
import { AppModule } from './app.module';
import { authConfig } from './auth/auth.config';
import { EnvModule } from './env/env.module';
import { auth } from 'express-openid-connect';

async function bootstrap() {
  const logger = new CustomLogger({
    logLevel: EnvModule.get('APP_LOG_LEVEL'),
  });
  const app = await NestFactory.create(AppModule, {
    logger,
  });

  await AuthModule.bootstrap(app as never, auth, authConfig);

  const config = new DocumentBuilder()
    .setTitle('apps/nest')
    .setVersion(process.env.npm_package_name)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
  Logger.log(`Application is running on: http://localhost:3000`, 'Bootstrap');
  Logger.verbose('Verbose logging is enabled.', 'Bootstrap');
}

bootstrap();
