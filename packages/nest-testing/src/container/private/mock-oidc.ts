import { Injectable, MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import { SessionResource } from 'packages/nest-utils/src/auth';

@Injectable()
export class MockOidcMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const mockSession = req.header('X-Mock-Session');
    if (mockSession) {
      const session: Partial<SessionResource> | undefined = JSON.parse(mockSession);
      req.oidc = {
        isAuthenticated: () => (session && session.sub ? true : false),
        user: session,
        fetchUserInfo: async () => session as never,
      };
    } else {
      req.oidc = {
        isAuthenticated: () => false,
        user: undefined,
        fetchUserInfo: async () => undefined,
      };
    }
    res.oidc = {
      login: vitest.fn(async () => {
        res.status(302).send();
      }),
      logout: vitest.fn(async () => {
        res.status(302).send();
      }),
      callback: vitest.fn(),
    };
    next();
  }
}

@Module({})
export class MockOidcModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MockOidcMiddleware).forRoutes('*');
  }
}

export function mockExpressOidcPackage() {
  vitest.doMock('express-openid-connect', () => {
    return {
      auth: vitest.fn(() => (_req: Request, _res: Response, next: NextFunction) => next()),
      requiresAuth: vitest.fn(() => (_req: Request, _res: Response, next: NextFunction) => next()),
    };
  });
}
