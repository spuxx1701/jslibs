import { Supertest, TestContainer } from '@spuxx/nest-utils';
import { cats } from './cats.data';
import { AppModule } from '../app.module';

describe('CatsController', () => {
  let supertest: Supertest;

  beforeEach(async () => {
    vi.stubEnv('AUTH_CLIENT_SECRET', 'foo');
    const container = await TestContainer.create({
      imports: [AppModule],
      enableEndToEnd: true,
    });
    supertest = container.supertest;
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  describe('findMany', () => {
    it('should return an array of cats', async () => {
      const response = await supertest.get('/cats');
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(cats.length);
      expect(response.body[0].owner).toBeUndefined();
    });

    it('should contain the owner relationship', async () => {
      const response = await supertest.get('/cats?include=owner');
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(cats.length);
      expect(response.body[0].owner).toBeDefined();
    });

    it('should fail due to an invalid include value', async () => {
      const response = await supertest.get('/cats?include=foo');
      expect(response.statusCode).toBe(400);
    });
  });
});
