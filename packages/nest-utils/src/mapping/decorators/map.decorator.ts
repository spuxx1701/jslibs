import 'reflect-metadata';
import { MAP_METADATA_KEY } from '../mapping.constants';
import { MapMetadata } from '../types/mapping.private-types';
import { MapOptions } from '../types/mapping.public-types';

/**
 * Used to decorator class properties that should be mapped to the target object when calling
 * `mapper.map()`.
 * @param options The options for the map decorator.
 * @example
 * class User {
 *   ＠Map()
 *   name: string;
 * }
 *
 * class UserResource {
 *   @Map()
 *   name: string;
 * }
 *
 * const user = new User();
 * user.name = 'John Doe';
 * const userResource = mapper.map(user, UserResource);
 * // userResource.name === 'John Doe'
 */
export function Map(options: MapOptions = {}) {
  return (target: object, propertyKey: string | symbol): void => {
    Reflect.defineMetadata(
      MAP_METADATA_KEY,
      { targetKey: options.targetKey ?? propertyKey } as MapMetadata,
      target,
      propertyKey,
    );
  };
}
