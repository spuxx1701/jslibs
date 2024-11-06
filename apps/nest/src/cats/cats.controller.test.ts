import { MappingModule, Supertest, TestContainer } from '@spuxx/nest-utils';
import { CatsModule } from './cats.module';
import { cats } from './cats.data';

describe('CatsController', () => {
  let supertest: Supertest;

  beforeEach(async () => {
    const container = await TestContainer.create({
      imports: [CatsModule, MappingModule],
      enableEndToEnd: true,
    });
    supertest = container.supertest;
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
      const response = await supertest.get('/cats?include=invalid');
      expect(response.status).toBe(400);
    });
  });
});
