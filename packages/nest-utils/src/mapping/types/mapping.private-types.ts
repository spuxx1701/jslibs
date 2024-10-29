import { Constructor } from '@spuxx/js-utils';

export interface MapMetadata {
  targetKey: string;
  preserveUndefined: boolean;
  nested?: {
    source: Constructor;
    target: Constructor;
  };
}

export type PropertyMap = Record<string, MapMetadata>;
