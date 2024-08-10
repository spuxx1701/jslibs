import { Module } from '@nestjs/common';
import { NestUtilsService } from './nest-utils.service';

@Module({
  providers: [NestUtilsService],
  exports: [NestUtilsService],
})
export class NestUtilsModule {}
