import { Transform } from 'class-transformer';

/**
 * Decorator that transforms boolean strings to booleans.
 * @example
 * ＠TransformBooleanString()
 * myBoolean: boolean; // 'true' and 'TRUE' becomes true, everything else becomes false
 */
export function TransformBooleanString() {
  return Transform(transformBooleanString);
}

/**
 * Transforms boolean strings to booleans.
 * 'true' and 'TRUE' becomes true, everything else becomes false.
 * @param value The value to transform.
 */
export function transformBooleanString({ value }: { value: unknown }): boolean {
  return value.toString().toLowerCase() === 'true';
}
