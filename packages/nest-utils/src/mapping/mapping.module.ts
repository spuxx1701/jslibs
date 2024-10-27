import { Module } from '@nestjs/common';
import { Mapper } from './services/mapper';

@Module({
  providers: [Mapper],
  // exports: [Mapper],
})
export class MappingModule {}
