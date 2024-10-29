export interface MapMetadata {
  targetKey: string;
  preserveUndefined: boolean;
  nested: boolean;
}

export type PropertyMap = Record<string, MapMetadata>;
