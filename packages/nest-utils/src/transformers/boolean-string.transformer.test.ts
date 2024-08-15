import { plainToInstance } from 'class-transformer';
import { TransformBooleanString } from './boolean-string.transformer';

describe('TransformBooleanString', () => {
  it("should transform 'true' to true", () => {
    class Test {
      @TransformBooleanString()
      bool: boolean;
    }
    const test = plainToInstance(Test, { bool: 'true' });
    expect(test.bool).toBe(true);
  });

  it("should transform 'TRUE' to true", () => {
    class Test {
      @TransformBooleanString()
      bool: boolean;
    }
    const test = plainToInstance(Test, { bool: 'TRUE' });
    expect(test.bool).toBe(true);
  });

  it('should transform any other value to false', () => {
    class Test {
      @TransformBooleanString()
      bool: boolean;
    }
    expect(plainToInstance(Test, { bool: 'foo' }).bool).toBe(false);
    expect(plainToInstance(Test, { bool: 123 }).bool).toBe(false);
    expect(plainToInstance(Test, { bool: () => {} }).bool).toBe(false);
    expect(plainToInstance(Test, { bool: { foo: 'bar' } }).bool).toBe(false);
  });
});
