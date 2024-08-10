import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestUtilsModule } from '@spuxx/nest-utils';

@Module({
  imports: [NestUtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
