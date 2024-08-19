import { Injectable } from '@nestjs/common';
import { type AuthOptions } from '../config/auth.options';

@Injectable()
export class AuthOptionsProvider {
  constructor(public readonly options: AuthOptions) {}
}
