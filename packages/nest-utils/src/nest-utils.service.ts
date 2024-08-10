import { Injectable } from '@nestjs/common';

@Injectable()
export class NestUtilsService {
  getHello(): string {
    return 'Hello World!';
  }
}
