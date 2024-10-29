export interface MapOptions {
  /**
   * The key of the property in the target object. Defaults to the name of the property
   * in the source object, but can be overridden to map to a different property name.
   */
  targetKey?: string;
  /**
   * Whether to preserve undefined values in the source object. Defaults to false.
   */
  preserveUndefined?: boolean;
}
