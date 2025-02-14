import { describe, it, expect } from 'vitest';
import { MAP_METADATA_KEY } from '../mapping.constants';
import { MapMetadata } from '../types/mapping.private-types';
import { Map } from './map.decorator';

describe('Map', () => {
  it('should set metadata on the decorated property', () => {
    class Cat {
      @Map({
        targetKey: 'catName',
      })
      name: string;

      @Map()
      color: string;
    }
    const nameMetadata = Reflect.getMetadata(MAP_METADATA_KEY, Cat.prototype, 'name');
    expect(nameMetadata).toEqual({ targetKey: 'catName', preserveUndefined: false } as MapMetadata);
    const colorMetadata = Reflect.getMetadata(MAP_METADATA_KEY, Cat.prototype, 'color');
    expect(colorMetadata).toEqual({ targetKey: 'color', preserveUndefined: false } as MapMetadata);
  });
});
