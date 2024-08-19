import { Roles } from './roles.decorator';
import { Reflector } from '@nestjs/core';

it('should set metadata with the provided single role', () => {
  class TestClass {
    @Roles('user')
    testMethod() {}
  }
  const reflector = new Reflector();
  const roles = reflector.get<string[]>('roles', TestClass.prototype.testMethod);
  expect(roles).toEqual(['user']);
});

it('should set empty array when no roles are provided', () => {
  class TestClass {
    @Roles()
    testMethod() {}
  }
  const reflector = new Reflector();
  const roles = reflector.get<string[]>('roles', TestClass.prototype.testMethod);
  expect(roles).toEqual([]);
});
