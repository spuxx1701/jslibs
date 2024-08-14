import { Injectable } from '@nestjs/common';
import { EnvModule } from './env/env.module';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello! The application is running since ${EnvModule.get('START_TIME')}.`;
  }
}
