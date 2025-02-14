import { Module } from '@nestjs/common';
import { EnvModuleMixin, ApplicationLogLevel } from '@spuxx/nest-utils';
import { IsIn, IsString, IsUrl } from 'class-validator';

class Env {
  @IsString()
  @IsIn(Object.values(ApplicationLogLevel))
  APP_LOG_LEVEL: ApplicationLogLevel = ApplicationLogLevel.Default;

  @IsString()
  APP_BASE_URL: string = 'http://localhost:3000';

  @IsUrl()
  AUTH_ISSUER_URL: string = 'https://auth.spuxx.dev/realms/main/';

  @IsString()
  AUTH_CLIENT_ID: string = 'test';

  @IsString()
  AUTH_CLIENT_SECRET: string;

  @IsString()
  AUTH_COOKIE_SECRET: string;
}
@Module({})
export class EnvModule extends EnvModuleMixin<Env>(Env) {}
