import { Transform } from 'class-transformer';
import { isEmptyOrWhitespace } from 'packages/js-utils/dist/main';

/**
 * Decorator that transforms comma-separated strings to an array of strings.
 * @example
 * ＠TransformArrayString()
 * myArray: string[];
 */
export function TransformArrayString(): PropertyDecorator {
  return Transform(({ value }: { value: unknown }) => transformArrayString(value));
}

/**
 * Transforms a comma-separated string to an array of strings. Returns an empty array
 * if the input is not a string.
 * @param value The value to transform.
 */
export function transformArrayString(value: unknown): string[] {
  if (typeof value === 'string' && !Array.isArray(value)) {
    return isEmptyOrWhitespace(value) ? [] : value.split(',');
  } else if (Array.isArray(value)) {
    for (const element of value) {
      if (typeof element !== 'string') {
        return [];
      }
    }
    return value;
  } else {
    return [];
  }
}
