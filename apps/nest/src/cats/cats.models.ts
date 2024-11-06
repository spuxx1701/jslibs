import { Map } from '@spuxx/nest-utils';
import { Breed } from './cats.types';

export class Owner {
  @Map()
  name: string;
  @Map()
  age: number;
  @Map()
  cats?: Cat[];
}

export class Cat {
  @Map()
  name: string;
  @Map()
  age: number;
  @Map()
  breed: Breed;
  @Map()
  owner?: Owner;
  ownerName?: string;
}
