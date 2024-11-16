import { TestContainer } from '@spuxx/nest-testing';
import { Map } from '../decorators/map.decorator';
import { Mapper } from './mapper';
import { Column, ForeignKey, HasOne, Model, Sequelize, Table } from 'sequelize-typescript';
import { MappingModule } from '../mapping.module';

describe('Mapper', () => {
  let mapper: Mapper;
  beforeEach(async () => {
    const container = await TestContainer.create({
      imports: [MappingModule],
    });
    mapper = container.module.get(Mapper);
  });

  describe('map', () => {
    it('should properly map a simple object', () => {
      class Source {
        @Map()
        str: string = '';

        @Map()
        num: number = 0;

        @Map()
        bool: boolean = false;

        @Map()
        date: Date = new Date('2024-10-29T00:00:00');

        @Map()
        opt: string | undefined = undefined;
      }

      class Target {
        @Map()
        str: string;

        @Map()
        num: number;

        @Map()
        date: Date;

        @Map()
        bool: boolean;
      }

      const target = mapper.map(new Source(), Source, Target);
      expect(target).toEqual({
        str: '',
        num: 0,
        bool: false,
        date: new Date('2024-10-29T00:00:00'),
      });
    });

    it("should not map if the source property isn't decorated", () => {
      class Source {
        foo: string = 'hello';
      }

      class Target {
        @Map()
        foo: string;
      }

      const target = mapper.map(new Source(), Source, Target);
      expect(target).toEqual({ foo: undefined });
    });

    it("should not map if the target property isn't decorated", () => {
      class Source {
        @Map()
        foo: string = 'bar';
      }

      class Target {
        foo: string;
      }

      const target = mapper.map(new Source(), Source, Target);
      expect(target).toEqual({ foo: undefined });
    });

    it('should map to a differently named property', () => {
      class Source {
        @Map({ targetKey: 'bar' })
        foo: string = 'hello';
      }

      class Target {
        @Map()
        bar: string;
      }

      const target = mapper.map(new Source(), Source, Target);
      expect(target).toEqual({ bar: 'hello' });
    });

    it('should map in both directions', () => {
      class Foo {
        @Map({ targetKey: 'bar' })
        foo: string = 'hello';
      }

      class Bar {
        @Map()
        bar: string;
      }

      const bar = mapper.map(new Foo(), Foo, Bar);
      expect(bar).toEqual({ bar: 'hello' });
      const foo = mapper.map(new Bar(), Bar, Foo);
      expect(foo).toEqual({ foo: 'hello' });
    });

    it('should respect preserveUndefined option', () => {
      class Source {
        @Map()
        default: string | undefined = undefined;

        @Map({ preserveUndefined: true })
        preserve: string | undefined = undefined;
      }

      class Target {
        @Map()
        default: string | undefined;

        @Map()
        preserve: string | undefined;
      }

      const target = mapper.map(new Source(), Source, Target);
      expect(target).toEqual({ preserve: undefined });
    });

    it('should map a nested object', () => {
      class Child {
        @Map()
        foo: string = 'bar';
      }
      class Parent {
        @Map()
        child: Child = new Child();
      }

      const target = mapper.map(new Parent(), Parent, Parent);
      expect(target).toBeInstanceOf(Parent);
      expect(target.child).toBeInstanceOf(Child);
      expect(target).toEqual({
        child: {
          foo: 'bar',
        },
      });
    });
  });

  describe('sequelize support', () => {
    @Table
    class Cat extends Model {
      @Column
      @Map()
      name: string;

      @Column
      @Map({ targetKey: 'color' })
      furColor: string;

      @ForeignKey(() => Owner)
      @Column
      ownerId: string;
    }

    class CatResource {
      @Map()
      name: string;

      @Map({ targetKey: 'furColor' })
      color: string;

      constructor(init?: CatResource) {
        Object.assign(this, init);
      }
    }

    @Table
    class Owner extends Model {
      @Column
      @Map()
      name: string;

      @HasOne(() => Cat)
      @Map()
      cat: Cat;
    }

    class OwnerResource {
      @Map()
      name: string;

      @Map()
      cat: CatResource;

      constructor(init?: OwnerResource) {
        Object.assign(this, init);
      }
    }

    beforeEach(() => {
      new Sequelize({
        dialect: 'sqlite',
        database: ':memory:',
        models: [Owner, Cat],
        sync: { force: true },
      });
    });

    it('should map from a sequelize model as source', () => {
      const cat = Cat.build({ name: 'Mittens', furColor: 'black' });
      const catResource = mapper.map(cat, Cat, CatResource);
      expect(catResource).toEqual({ name: 'Mittens', color: 'black' });
    });

    it('should map to a sequelize model as target', () => {
      const catResource = new CatResource({ name: 'Mittens', color: 'black' });
      const cat = mapper.map(catResource, CatResource, Cat);
      expect(cat.get('name')).toEqual('Mittens');
      expect(cat.get('furColor')).toEqual('black');
      expect(cat).toBeInstanceOf(Model);
    });

    it('should map from a sequelize model with a relation as source', () => {
      const owner = Owner.build(
        { name: 'John', cat: { name: 'Mittens', furColor: 'black' } },
        {
          include: [Cat],
        },
      );
      const ownerResource = mapper.map(owner, Owner, OwnerResource);
      expect(ownerResource).toEqual({ name: 'John', cat: { name: 'Mittens', color: 'black' } });
      expect(ownerResource).toBeInstanceOf(OwnerResource);
      expect(ownerResource.cat).toBeInstanceOf(CatResource);
    });
  });
});
