import { Module } from '@nestjs/common';
import { CatsProvider } from './cats.provider';
import { CatsController } from './cats.controller';

@Module({
  providers: [CatsProvider],
  controllers: [CatsController],
})
export class CatsModule {}
