import { Cat } from './models/cat.model';
import { Owner } from './models/owner.model';

export const owners: Owner[] = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Jane',
    age: 28,
  },
];

export const cats: Cat[] = [
  {
    name: 'Fluffy',
    age: 2,
    breed: 'Siamese',
    ownerName: 'John',
  },
  {
    name: 'Whiskers',
    age: 3,
    breed: 'Persian',
    ownerName: 'Jane',
  },
  {
    name: 'Mittens',
    age: 1,
    breed: 'Maine Coon',
    ownerName: 'John',
  },
];
