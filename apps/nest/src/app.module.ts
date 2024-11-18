import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule, MappingModule } from '@spuxx/nest-utils';
import { EnvModule } from './env/env.module';
import { authConfig } from './auth/auth.config';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [EnvModule, AuthModule.forRoot(authConfig), MappingModule, CatsModule],
  controllers: [AppController],
})
export class AppModule {}
