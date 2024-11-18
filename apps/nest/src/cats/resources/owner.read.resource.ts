import { ApiProperty } from '@nestjs/swagger';
import { Map } from '@spuxx/nest-utils';
import { ownerPropertyDocs } from './owner.property-docs';

export class OwnerReadResource {
  @Map()
  @ApiProperty(ownerPropertyDocs.name)
  name: string;
  @Map()
  @ApiProperty(ownerPropertyDocs.age)
  age: string;
}
