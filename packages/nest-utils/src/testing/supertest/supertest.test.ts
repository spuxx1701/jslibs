import { Controller, Get, INestApplication } from '@nestjs/common';
import { TestContainer } from '../container';
import { Supertest } from './supertest';

describe('Supertest', () => {
  describe('get', () => {
    let app: INestApplication;
    it('should trigger the endpoint', async () => {
      @Controller()
      class MyController {
        @Get('/hello')
        get() {
          return 'Hello World!';
        }
      }
      const container = await TestContainer.create({ controllers: [MyController], enableEndToEnd: true });
      app = container.app;
      const supertest = new Supertest(app);
      await supertest.get('/hello').expect(200).expect('Hello World!');
    });
  });
});
