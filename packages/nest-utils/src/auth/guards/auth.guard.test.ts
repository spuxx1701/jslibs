import { AuthGuard } from './auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Supertest, TestContainer } from '../../testing';
import { Roles } from '../decorators/roles.decorator';

const AuthRole = {
  Admin: 'admin',
  User: 'user',
} as const;
type AuthRole = (typeof AuthRole)[keyof typeof AuthRole];

describe('AuthGuard', () => {
  afterEach(() => {
    vitest.clearAllMocks();
  });

  describe('Authentication disabled', () => {
    let supertest: Supertest;

    @Controller()
    class TestController {
      @Get('requiresAuthentication')
      @UseGuards(AuthGuard)
      requiresAuthentication() {}

      @Get('requiresAuthorization')
      @UseGuards(AuthGuard)
      @Roles(AuthRole.User)
      requiresAuthorization() {}
    }

    beforeEach(async () => {
      const container = await TestContainer.create({
        controllers: [TestController],
        authOptions: {
          disable: true,
        },
        enableEndToEnd: true,
      });
      supertest = container.supertest;
    });

    it('should allow the request to pass without authentication', async () => {
      const response = await supertest.get('/requiresAuthentication');
      expect(response.statusCode).toBe(200);
    });

    it('should allow the request to pass without authorization', async () => {
      const response = await supertest.get('/requiresAuthorization');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('Authentication', () => {
    let supertest: Supertest;

    @Controller()
    class TestController {
      @Get('protected')
      @UseGuards(AuthGuard)
      protected() {}

      @Get('unprotected')
      unprotected() {}
    }

    beforeEach(async () => {
      const container = await TestContainer.create({
        controllers: [TestController],
        authOptions: {
          roles: AuthRole,
        },
        enableEndToEnd: true,
      });
      supertest = container.supertest;
    });

    it('should deny an unauthenticated request to the protected route', async () => {
      const response = await supertest.get('/protected');
      expect(response.statusCode).toBe(401);
    });

    it('should allow an authenticated request to the protected route', async () => {
      const response = await supertest.get('/protected', {
        session: {
          sub: '123',
          name: 'John Deer',
          realm_access: {
            roles: ['user'],
          },
        },
      });
      expect(response.statusCode).toBe(200);
    });

    it('should allow an unauthenticated request to the unprotected route', async () => {
      const response = await supertest.get('/unprotected');
      expect(response.statusCode).toBe(200);
    });
  });

  // describe('Authorization', () => {});

  // describe('Decorating the controller', () => {});

  // describe('Authentication', () => {
  //   let guard: AuthGuard;
  //   let reflector: Reflector;

  //   beforeEach(async () => {
  //     const container = await TestContainer.create({
  //       providers: [AuthService],
  //     });
  //     reflector = new Reflector();
  //     guard = new AuthGuard(reflector);
  //   });

  //   it('should throw an UnauthorizedException for unauthenticated request', () => {
  //     const executionContext = authGuardMocks.unauthenticatedContext;
  //     expect(() => {
  //       guard.canActivate(executionContext);
  //     }).toThrowError(UnauthorizedException);
  //   });
  // });

  // describe('Authorization', () => {
  //   let guard: AuthGuard;
  //   let reflector: Reflector;

  //   beforeEach(async () => {
  //     const container = await TestContainer.create({
  //       providers: [AuthService],
  //     });
  //     reflector = new Reflector();
  //     guard = new AuthGuard(reflector);
  //   });

  //   it('should return true for an authenticated request when the guard does not require any specific roles', () => {
  //     reflector.get = vi.fn().mockReturnValue(undefined);
  //     const executionContext = authGuardMocks.authenticatedContextWithRead;
  //     expect(guard.canActivate(executionContext)).toBe(true);
  //   });

  //   it('should return true for an authenticated request that fulfills specific role requirements', () => {
  //     reflector.get = vi.fn().mockReturnValue([AuthRole.read, AuthRole.write]);
  //     const executionContext = authGuardMocks.authenticatedContextWithReadWrite;
  //     expect(guard.canActivate(executionContext)).toBe(true);
  //   });

  //   it('should throw a ForbiddenException for an unauthorized request when the guard does not require any specific roles', () => {
  //     let executionContext = authGuardMocks.authenticatedContextWithoutRoles;
  //     expect(() => {
  //       guard.canActivate(executionContext);
  //     }).toThrowError(ForbiddenException);
  //     executionContext = authGuardMocks.authenticatedContextWithUnrelatedRole;
  //     expect(() => {
  //       guard.canActivate(executionContext);
  //     }).toThrowError(ForbiddenException);
  //   });

  //   it('should throw a ForbiddenException for an unauthorized request that fails to meet specific role requirements', () => {
  //     reflector.get = vi.fn().mockReturnValue([AuthRole.read, AuthRole.write]);
  //     let executionContext = authGuardMocks.authenticatedContextWithRead;
  //     expect(() => {
  //       guard.canActivate(executionContext);
  //     }).toThrowError(ForbiddenException);
  //     executionContext = authGuardMocks.authenticatedContextWithUnrelatedRole;
  //     expect(() => {
  //       guard.canActivate(executionContext);
  //     }).toThrowError(ForbiddenException);
  //   });
  // });
});
