import { SessionResource } from '@spuxx/nest-utils';

export interface SupertestOptions {
  /**
   * The session resource that should be attached to the request. May be used to simulate
   * authenticated or authorized requests.
   */
  session?: Partial<SessionResource>;
  /**
   * The request body.
   */
  body?: object;
}
