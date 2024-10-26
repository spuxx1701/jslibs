import { AutoMap } from '@automapper/classes';
import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TestContainer } from '../testing';

describe('MappingModule', () => {
  class Source {
    @AutoMap()
    str: string;

    @AutoMap()
    num: number;
  }

  class Target {
    @AutoMap()
    str: string;

    @AutoMap()
    num: number;
  }

  @Injectable()
  class Profile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
      super(mapper);
    }

    override get profile() {
      return (mapper: Mapper) => {
        createMap(mapper, Source, Target);
      };
    }
  }

  @Injectable()
  class Service {
    constructor(@InjectMapper() readonly mapper: Mapper) {}

    map(source: Source): Target {
      return this.mapper.map(source, Source, Target);
    }
  }

  let service: Service;

  beforeEach(async () => {
    const container = await TestContainer.create({
      providers: [Profile, Service],
    });
    service = container.module.get(Service);
  });

  it('should properly map from source to target', () => {
    const source: Source = {
      str: 'foo',
      num: 420,
    };
    const expected: Target = {
      ...source,
    };
    expect(service.map(source)).toEqual(expected);
  });
});
