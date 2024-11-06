import { plainToInstance } from 'class-transformer';
import { TransformArrayString } from './array-string.transformer';

describe('TransformArrayString', () => {
  class Test {
    @TransformArrayString()
    values: string[];
  }

  it("should transform 'foo' to ['foo']", () => {
    const test = plainToInstance(Test, { values: 'foo,bar' });
    expect(test.values).toEqual(['foo', 'bar']);
  });

  it("should transform 'foo,' to ['foo', '']", () => {
    const test = plainToInstance(Test, { values: 'foo,' });
    expect(test.values).toEqual(['foo', '']);
  });

  it("should transform 'foo,bar' to ['foo', 'bar']", () => {
    const test = plainToInstance(Test, { values: 'foo,bar' });
    expect(test.values).toEqual(['foo', 'bar']);
  });

  it('should return an empty array for all non-string values', () => {
    expect(plainToInstance(Test, { values: true }).values).toEqual([]);
    expect(plainToInstance(Test, { values: 0 }).values).toEqual([]);
    expect(plainToInstance(Test, { values: [] }).values).toEqual([]);
    expect(plainToInstance(Test, { values: {} }).values).toEqual([]);
    expect(plainToInstance(Test, { values: null }).values).toEqual([]);
  });
});
