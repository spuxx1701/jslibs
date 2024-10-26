import { AutoMap } from '@automapper/classes';
import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TestAppLogger, TestContainer } from '../testing';

describe('MappingModule', () => {
  describe('mapping', () => {
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

  describe('strategy', () => {
    it('should use the sequelize strategy if it can be loaded', async () => {
      const logger = new TestAppLogger({
        logLevel: 'verbose',
      });
      await TestContainer.create({
        logger,
      });
      const flattenedMessages = logger.messages.flat();
      expect(flattenedMessages).not.toContain(
        'Failed to import @automapper/sequelize. Falling back to @automapper/classes.',
      );
    });

    it('should fall back to the classes strategy if the sequelize strategy cannot be loaded', async () => {
      const logger = new TestAppLogger({
        logLevel: 'verbose',
      });
      vitest.doMock('@automapper/sequelize', () => {
        return undefined;
      });
      await TestContainer.create({
        logger,
      });
      const flattenedMessages = logger.messages.flat();
      expect(flattenedMessages).toContain(
        'Failed to import @automapper/sequelize. Falling back to @automapper/classes.',
      );
    });
  });
});
