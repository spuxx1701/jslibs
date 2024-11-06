import { Injectable } from '@nestjs/common';
import { Cat, Owner } from './cats.models';
import { cats, owners } from './cats.data';
import { CatsFindManyQuery } from './cats.queries';

@Injectable()
export class CatsProvider {
  private readonly cats: Cat[] = cats;
  private readonly owners: Owner[] = owners;

  findMany(query?: CatsFindManyQuery): Cat[] {
    const { include } = { ...query };
    const results: Cat[] = [
      ...this.cats.map((cat) => {
        return { ...cat };
      }),
    ];
    if (include?.includes('owner')) {
      for (const cat of results) cat.owner = this.getOwner(cat);
    }
    return results;
  }

  private getOwner(cat: Cat): Owner {
    return this.owners.find((owner) => owner.name === cat.ownerName);
  }
}
