import { Constructor } from '@spuxx/js-utils';

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
  /**
   * Enables support for mapping nested objects.
   * ⚠️ Note: Nested mapping is only supported when mapping to Vanilla JavaScript classes. It
   * will not reliably work with 3rd party classes like ORM entities/models.
   */
  nested?: {
    source: Constructor;
    target: Constructor;
  };
}
