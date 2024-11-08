import { Supertest, TestContainer } from '@spuxx/nest-testing';
import { SessionResource } from '../resources/session.resource';

describe('AuthController', () => {
  let supertest: Supertest;

  beforeEach(async () => {
    const container = await TestContainer.create({
      authOptions: {
        roles: {
          user: 'user',
        },
        allowedRedirectHostnames: ['good.com'],
      },
      enableEndToEnd: true,
    });
    supertest = container.supertest;
  });

  describe('getSession', () => {
    it('should return the session details', async () => {
      const session: SessionResource = {
        sub: '123',
        sid: '123',
        email: 'john.deer@gmail.com',
        email_verified: true,
        preferred_username: 'johndeer',
        name: 'John Deer',
        given_name: 'John',
        family_name: 'Deer',
        locale: 'de',
        groups: ['user'],
      };
      const response = await supertest.get('/auth/session', {
        session,
      });
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(session);
    });
    it('should return status code 401', async () => {
      const response = await supertest.get('/auth/session');
      expect(response.statusCode).toBe(401);
    });

    it('should return status code 403 due to missing roles', async () => {
      const response = await supertest.get('/auth/session', {
        session: {
          sub: '123',
        },
      });
      expect(response.statusCode).toBe(403);
    });

    it('should return status code 403 due to foreign roles', async () => {
      const response = await supertest.get('/auth/session', {
        session: {
          sub: '123',
          groups: ['completely-different-application'],
        },
      });
      expect(response.statusCode).toBe(403);
    });
  });

  describe('login', () => {
    it('should redirect to the IDP', async () => {
      const response = await supertest.get('/auth/login');
      expect(response.statusCode).toBe(302);
    });

    it('should accept a valid redirect URL', async () => {
      const response = await supertest.get('/auth/login?returnTo=https://good.com');
      expect(response.statusCode).toBe(302);
    });

    it('should accept a valid redirect URL with a sub-path', async () => {
      const response = await supertest.get('/auth/login?returnTo=https://good.com/sub/path');
      expect(response.statusCode).toBe(302);
    });

    it('should deny a forbidden redirect URL', async () => {
      const response = await supertest.get('/auth/login?returnTo=https://evil.com');
      expect(response.statusCode).toBe(400);
    });

    it('should deny an invalid redirect URL', async () => {
      const response = await supertest.get('/auth/login?returnTo=not-a-url');
      expect(response.statusCode).toBe(400);
    });
  });

  describe('logout', () => {
    it('should redirect to the IDP', async () => {
      const response = await supertest.get('/auth/logout');
      expect(response.statusCode).toBe(302);
    });

    it('should accept a valid redirect URL', async () => {
      const response = await supertest.get('/auth/logout?returnTo=https://good.com');
      expect(response.statusCode).toBe(302);
    });

    it('should accept a valid redirect URL with a sub-path', async () => {
      const response = await supertest.get('/auth/logout?returnTo=https://good.com/sub/path');
      expect(response.statusCode).toBe(302);
    });

    it('should deny a forbidden redirect URL', async () => {
      const response = await supertest.get('/auth/logout?returnTo=https://evil.com');
      expect(response.statusCode).toBe(400);
    });

    it('should deny an invalid redirect URL', async () => {
      const response = await supertest.get('/auth/logout?returnTo=not-a-url');
      expect(response.statusCode).toBe(400);
    });
  });
});
