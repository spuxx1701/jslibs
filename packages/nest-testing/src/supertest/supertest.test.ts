import { Controller, Get, UseGuards } from '@nestjs/common';
import { TestContainer } from '../container';
import { Supertest } from './supertest';
import { AuthGuard, AuthModule, Roles, SessionResource } from '@spuxx/nest-utils';
import { beforeEach, describe, expect, it } from 'vitest';

describe('Supertest', () => {
  @Controller()
  class MyController {
    @Get('/hello')
    get() {
      return 'Hello World!';
    }

    @Get('/requires-authentication')
    @UseGuards(AuthGuard)
    requiresAuthentication() {
      return "You're authenticated!";
    }

    @Get('/requires-authorization')
    @UseGuards(AuthGuard)
    @Roles('admin')
    requiresAuthorization() {
      return "You're authorized!";
    }
  }

  let supertest: Supertest;

  beforeEach(async () => {
    const container = await TestContainer.create({
      imports: [
        AuthModule.forRoot({
          oidc: {},
          roles: {
            user: 'user',
            admin: 'admin',
          },
        }),
      ],
      controllers: [MyController],
      enableEndToEnd: true,
    });
    supertest = container.supertest;
  });

  describe('get', () => {
    it('should return 200', async () => {
      const response = await supertest.get('/hello');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Hello World!');
    });

    it('should return 401 on the endpoint that requires authentication', async () => {
      const response = await supertest.get('/requires-authentication');
      expect(response.status).toBe(401);
    });

    it('should return 200 on the endpoint that requires authentication', async () => {
      const response = await supertest.get('/requires-authentication', {
        session: {
          sub: '123',
          groups: ['user'],
        },
      });
      expect(response.status).toBe(200);
    });

    it('should return 401 on the endpoint that requires authorization', async () => {
      const response = await supertest.get('/requires-authorization');
      expect(response.status).toBe(401);
    });

    it('should return 403 on the endpoint that requires authentication', async () => {
      const response = await supertest.get('/requires-authorization', {
        session: {
          sub: '123',
          groups: ['user'],
        },
      });
      expect(response.status).toBe(403);
    });

    it('should return 200 on the endpoint that requires authentication', async () => {
      const response = await supertest.get('/requires-authorization', {
        session: {
          sub: '123',
          groups: ['user', 'admin'],
        },
      });
      expect(response.status).toBe(200);
    });
  });

  describe('setupRequest', () => {
    it("should set the 'X-Mock-Session' header", async () => {
      const session: Partial<SessionResource> = {
        sub: '123',
      };
      const request = supertest.get('/hello', {
        session,
      });
      expect(request.getHeader('X-Mock-Session')).toBe(JSON.stringify(session));
    });

    it("should not set the 'X-Mock-Session' header", async () => {
      const container = await TestContainer.create({ enableEndToEnd: true });
      const supertest = new Supertest(container.app);
      const request = supertest.get('/hello');
      expect(request.getHeader('X-Mock-Session')).toBeUndefined();
    });
  });
});
