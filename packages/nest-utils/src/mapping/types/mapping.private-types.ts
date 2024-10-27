export interface MapMetadata {
  targetKey: string;
  preserveUndefined: boolean;
}

export type PropertyMap = Record<string, MapMetadata>;
