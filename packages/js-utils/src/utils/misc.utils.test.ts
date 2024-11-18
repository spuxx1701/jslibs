import { describe, test, expect } from 'vitest';
import { deepMerge, isEmptyArray, isEmptyOrWhitespace, sleep } from './misc.utils';

describe('sleep', () => {
  test('should resolve after the given amount of milliseconds', async () => {
    const start = Date.now();
    await sleep(1000);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
    expect(end - start).toBeLessThan(1050);
  });
});

describe('isEmptyOrWhitespace', () => {
  test('should return true for empty values', () => {
    expect(isEmptyOrWhitespace('')).toBe(true);
    expect(isEmptyOrWhitespace('   ')).toBe(true);
    expect(isEmptyOrWhitespace(undefined)).toBe(true);
    expect(isEmptyOrWhitespace(null)).toBe(true);
  });

  test('should return for non-empty values', () => {
    expect(isEmptyOrWhitespace(' foo ')).toBe(false);
    expect(isEmptyOrWhitespace('bar')).toBe(false);
    expect(isEmptyOrWhitespace(0)).toBe(false);
    expect(isEmptyOrWhitespace({})).toBe(false);
    expect(isEmptyOrWhitespace([])).toBe(false);
    expect(isEmptyOrWhitespace(false)).toBe(false);
  });
});

describe('isEmptyArray', () => {
  test('should return true for empty array', () => {
    expect(isEmptyArray(undefined)).toBe(true);
    expect(isEmptyArray(null)).toBe(true);
    expect(isEmptyArray([])).toBe(true);
    expect(isEmptyArray(['foo'])).toBe(false);
    expect(isEmptyArray(['foo', 'bar'])).toBe(false);
    expect(isEmptyArray([0])).toBe(false);
    expect(isEmptyArray([undefined])).toBe(false);
  });
});

describe('deepMerge', () => {
  test('should merge objects deeply', () => {
    const object1 = {
      prop: {
        foo: {
          key1: '1',
          key2: '2',
        },
      },
    };

    const object2 = {
      prop: {
        bar: {
          key3: '3',
          key4: '4',
        },
      },
    };

    const expected = {
      prop: {
        foo: {
          key1: '1',
          key2: '2',
        },
        bar: {
          key3: '3',
          key4: '4',
        },
      },
    };

    expect(deepMerge(object1, object2)).toEqual(expected);
  });

  test('should return an empty object if sources are empty', () => {
    expect(deepMerge()).toEqual({});
  });
});
