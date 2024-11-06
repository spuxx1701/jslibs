import { ApiParamOptions, ApiPropertyOptions } from '@nestjs/swagger';
import { CatReadResource, OwnerReadResource } from './cats.resource';
import { Breed } from './cats.types';

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

export const ownerPropertyDocs = {
  name: {
    name: 'name',
    description: 'The name of the owner',
    example: 'John Doe',
  } as ApiPropertyOptions & ApiParamOptions,

  age: {
    name: 'age',
    description: 'The age of the owner',
    example: 30,
  } as ApiPropertyOptions,

  cats: {
    name: 'cats',
    description: 'The cats owned by the owner',
    type: CatReadResource,
    isArray: true,
  } as ApiPropertyOptions,
};
