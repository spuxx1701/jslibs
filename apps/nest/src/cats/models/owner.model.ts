import { Map } from '@spuxx/nest-utils';

export class Owner {
  @Map()
  name: string;
  @Map()
  age: number;
}
