import { Global, Module } from '@nestjs/common';
import { Mapper } from './services/mapper';

/**
 * This module provides mapping capabilities through the `@Map()` decorator and  `Mapper` provider.
 * As a global module, it should be imported once in the root module of your application.
 */
@Global()
@Module({
  providers: [Mapper],
  exports: [Mapper],
})
export class MappingModule {}
