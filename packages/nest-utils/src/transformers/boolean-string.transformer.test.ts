import { describe, it, expect } from 'vitest';
import { plainToInstance } from 'class-transformer';
import { TransformBooleanString } from './boolean-string.transformer';

describe('TransformBooleanString', () => {
  class Test {
    @TransformBooleanString()
    bool: boolean;
  }

  it("should transform 'true' to true", () => {
    const test = plainToInstance(Test, { bool: 'true' });
    expect(test.bool).toBe(true);
  });

  it("should transform 'TRUE' to true", () => {
    const test = plainToInstance(Test, { bool: 'TRUE' });
    expect(test.bool).toBe(true);
  });

  it('should transform any other value to false', () => {
    expect(plainToInstance(Test, { bool: 'foo' }).bool).toBe(false);
    expect(plainToInstance(Test, { bool: 123 }).bool).toBe(false);
    expect(plainToInstance(Test, { bool: () => {} }).bool).toBe(false);
    expect(plainToInstance(Test, { bool: { foo: 'bar' } }).bool).toBe(false);
  });

  it('should not transform a nullish or undefine value', () => {
    expect(plainToInstance(Test, {})).toEqual({});
    expect(plainToInstance(Test, { bool: undefined })).toEqual({ bool: undefined });
    expect(plainToInstance(Test, { bool: null })).toEqual({ bool: undefined });
  });
});
