import { Controller, Get } from '@nestjs/common';
import { TestContainer } from '../container';
import { Supertest } from './supertest';
import { SessionResource } from '../../auth';

describe('Supertest', () => {
  @Controller()
  class MyController {
    @Get('/hello')
    get() {
      return 'Hello World!';
    }
  }

  describe('get', () => {
    it('should trigger the endpoint', async () => {
      const container = await TestContainer.create({ controllers: [MyController], enableEndToEnd: true });
      const supertest = new Supertest(container.app);
      const response = await supertest.get('/hello');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Hello World!');
    });
  });

  describe('setSession', () => {
    it("should set the 'X-Mock-Session' header", async () => {
      const container = await TestContainer.create({ enableEndToEnd: true });
      const supertest = new Supertest(container.app);
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
