import { Transform } from 'class-transformer';

/**
 * Decorator that transforms boolean strings to booleans.
 * @example
 * ＠TransformBooleanString()
 * myBoolean: boolean; // 'true' and 'TRUE' becomes true, everything else becomes false
 */
export function TransformBooleanString(): PropertyDecorator {
  return Transform(({ value }: { value: unknown }) => transformBooleanString(value));
}

/**
 * Transforms boolean strings to booleans.
 * 'true' and 'TRUE' becomes true, everything else becomes false.
 * @param value The value to transform.
 */
export function transformBooleanString(value: unknown): boolean | void {
  if (value === undefined || value === null) return;
  return value.toString().toLowerCase() === 'true';
}
