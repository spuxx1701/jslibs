import { EnvModuleMixin } from '@spuxx/nest-utils';
import { Environment } from './env.definition';

export class EnvModule extends EnvModuleMixin<Environment>(Environment) {}
