import { TestContainer } from '../../testing';
import { Map } from '../decorators/map.decorator';
import { Mapper } from './mapper';
import { Column, Model, Sequelize, Table } from 'sequelize-typescript';

describe('Mapper', () => {
  let mapper: Mapper;
  beforeEach(async () => {
    const container = await TestContainer.create({
      // MappingModule is imported automatically by TestContainer
    });
    mapper = container.module.get(Mapper);
  });

  describe('map', () => {
    it('should properly map a simple object', () => {
      class Source {
        @Map()
        foo: string = 'hello';
      }

      class Target {
        @Map()
        foo: string;
      }

      const target = mapper.map(new Source(), Source, Target);
      expect(target).toEqual({ foo: 'hello' });
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

    beforeEach(() => {
      new Sequelize({
        dialect: 'sqlite',
        database: ':memory:',
        models: [Cat],
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
      expect(cat.getDataValue('name')).toEqual('Mittens');
      expect(cat.getDataValue('furColor')).toEqual('black');
      expect(cat).toBeInstanceOf(Model);
    });
  });
});
