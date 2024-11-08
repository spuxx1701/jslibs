import { TestContainer } from '@spuxx/nest-testing';
import { AuthOptions, defaultAuthOptions } from '../config/auth.options';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  const authOptions: AuthOptions = {
    ...defaultAuthOptions,
    roles: {
      user: 'user',
    },
  };
  beforeEach(async () => {
    const container = await TestContainer.create({
      authOptions,
      enableEndToEnd: true,
    });
    service = container.module.get<AuthService>(AuthService);
  });

  describe('options', () => {
    it('should return the auth options object', () => {
      const { options } = service;
      expect(options).toBeDefined();
      expect(options).toEqual(authOptions);
    });
  });
});
