import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestContainer, Supertest } from '@spuxx/nest-utils';

describe('AppController', () => {
  let supertest: Supertest;

  beforeEach(async () => {
    const container = await TestContainer.create({
      controllers: [AppController],
      providers: [AppService],
      enableEndToEnd: true,
    });
    supertest = container.supertest;
  });

  describe('root', () => {
    it('should be successful', async () => {
      const response = await supertest.get('/');
      expect(response.statusCode).toBe(200);
      expect(response.text).toContain('Hello!');
    });
  });
});
