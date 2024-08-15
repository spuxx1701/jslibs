import { Transform } from 'class-transformer';

/**
 * Provides a decorator that transforms boolean strings to booleans.
 * Use via adding '@TransformBooleanString()' to a property.
 * @returns The transformer.
 * @example
 * ＠TransformBooleanString()
 * myBoolean: boolean; // 'true' and 'TRUE' becomes true, everything else becomes false
 */
export function TransformBooleanString() {
  return Transform(({ obj, key }) => obj[key].toString().toLowerCase() === 'true');
}
