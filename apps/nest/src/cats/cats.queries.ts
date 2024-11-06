import { IncludeQueryParam } from 'packages/nest-utils/dist/main';

export class CatsFindManyQuery {
  @IncludeQueryParam('owner')
  include?: string[];
}
