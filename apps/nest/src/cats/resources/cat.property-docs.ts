import { ApiParamOptions, ApiPropertyOptions } from '@nestjs/swagger';
import { Breed } from '../cats.types';
import { OwnerReadResource } from './owner.read.resource';

export const catPropertyDocs = {
  name: {
    name: 'name',
    description: 'The name of the cat',
    example: 'Whiskers',
  } as ApiPropertyOptions & ApiParamOptions,

  age: {
    name: 'age',
    description: 'The age of the cat',
    example: 3,
  } as ApiPropertyOptions,

  breed: {
    name: 'breed',
    description: 'The breed of the cat',
    example: Breed.siamese,
    enum: Breed,
  } as ApiPropertyOptions,

  owner: {
    name: 'owner',
    description: 'The owner of the cat',
    type: OwnerReadResource,
  } as ApiPropertyOptions,
};
