import { Injectable } from '@nestjs/common';
import { NestUtilsService } from '@spuxx/nest-utils';

@Injectable()
export class AppService {
  constructor(private readonly utils: NestUtilsService) {}

  getHello(): string {
    return this.utils.getHello();
  }
}
