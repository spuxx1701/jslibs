import { IncludeQueryParam } from '@spuxx/nest-utils';

export class CatsFindManyQuery {
  @IncludeQueryParam('owner')
  include?: string[];
}
