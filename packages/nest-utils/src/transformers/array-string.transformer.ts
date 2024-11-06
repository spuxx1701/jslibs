import { Transform } from 'class-transformer';

/**
 * Decorator that transforms comma-separated strings to an array of strings.
 * @example
 * ＠TransformArrayString()
 * myArray: string[];
 */
export function TransformArrayString() {
  return Transform(transformArrayString);
}

/**
 * Transforms a comma-separated string to an array of strings. Returns an empty array
 * if the input is not a string.
 * @param value The value to transform.
 */
export function transformArrayString({ value }: { value: unknown }): string[] {
  if (typeof value === 'string') {
    return value.split(',');
  } else {
    return [];
  }
}
