import { Test, TestingModule } from '@nestjs/testing';
import { NestUtilsService } from './nest-utils.service';

describe('NestUtilsService', () => {
  let service: NestUtilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestUtilsService],
    }).compile();

    service = module.get<NestUtilsService>(NestUtilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
