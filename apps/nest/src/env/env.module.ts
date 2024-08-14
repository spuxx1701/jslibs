import { EnvModuleMixin } from '@spuxx/nest-utils';
import { Environment } from './env.definiton';

export class EnvModule extends EnvModuleMixin<Environment>(Environment) {}
