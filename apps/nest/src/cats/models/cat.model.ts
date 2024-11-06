import { Map } from '@spuxx/nest-utils';
import { Breed } from '../cats.types';
import { Owner } from './owner.model';
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
