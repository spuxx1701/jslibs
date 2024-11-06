import { ApiProperty } from '@nestjs/swagger';
import { Map } from '@spuxx/nest-utils';
import { catPropertyDocs, ownerPropertyDocs } from './cats.property-docs';

export class OwnerReadResource {
  @Map()
  @ApiProperty(ownerPropertyDocs.name)
  name: string;
  @Map()
  @ApiProperty(ownerPropertyDocs.age)
  age: string;
  @Map()
  @ApiProperty(ownerPropertyDocs.cats)
  cats: CatReadResource[];
}

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
