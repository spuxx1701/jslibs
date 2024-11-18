import { ApiProperty } from '@nestjs/swagger';
import { Map } from '@spuxx/nest-utils';
import { catPropertyDocs } from './cat.property-docs';
import { OwnerReadResource } from './owner.read.resource';

export class CatReadResource {
  @Map()
  @ApiProperty(catPropertyDocs.name)
  name: string;
  @Map()
  @ApiProperty(catPropertyDocs.age)
  age: number;
  @Map()
  @ApiProperty(catPropertyDocs.breed)
  breed: string;
  @Map()
  @ApiProperty(catPropertyDocs.owner)
  owner?: OwnerReadResource;
}
