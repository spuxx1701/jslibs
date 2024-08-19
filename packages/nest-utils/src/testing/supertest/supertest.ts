/* eslint-disable @typescript-eslint/no-explicit-any */
import { INestApplication } from '@nestjs/common';
import supertest, { Request } from 'supertest';
import { SessionResource } from '../../auth';

/**
 * `Supertest` is an abstraction of the `supertest` package that allows easily faking
 * incoming HTTP requests during tests.
 * @param app The Nest application instance to test.
 * @param session (optional) The session to use for the request. Session must contain at least
 * `sub` to be considered an authenticated session.
 * @example
 * // Assuming you already have an instance of `INestApplication`
 * const supertest = new Supertest(app);
 * const response = await supertest.get("/hello");
 * // ... assertions ...
 *
 * // Or simply retrieve the `supertest` instance from your instance of `TestContainer`
 * const container = await TestContainer.create({
 *   enableEndToEnd: true,
 * });
 * const supertest = container.supertest;
 */
export class Supertest {
  constructor(
    private readonly app: INestApplication,
    private readonly session?: Partial<SessionResource>,
  ) {}

  /**
   * Creates a fake HTTP `GET` request.
   * @param url The request URL.
   * @param options.session (optional) The session to use for the request. Session must contain
   * at least `sub` to be considered an authenticated session.
   * @returns The request.
   * @example
   * const response = await supertest.get("/hello");
   * expect(response.statusCode).toBe(200);
   */
  get(url: string, options?: { session?: Partial<SessionResource> }): Request {
    const httpServer = this.app.getHttpServer();
    const request: Request = supertest(httpServer).get(url);
    this.setSession(request, options?.session);
    return request;
  }

  /**
   * Sets the session for the request, simulating an authenticated or possibly authorized
   * request.
   * @param request The request.
   * @param session The session.
   */
  private setSession(request: Request, session?: Partial<SessionResource>) {
    session = session ?? this.session;
    if (session) request.set('X-Mock-Session', JSON.stringify(session));
  }
}

// /**
//  * Creates a fake get request.
//  * @param app The Nest application instance.
//  * @param url The request url.
//  * @returns The request.
//  * @example
//  * import { fakeGetRequest } from 'test/helpers/app-e2e-spec.ts';
//  * import { AuthRole } from 'src/auth/config/roles.config';
//  *
//  * const request = fakeGetRequest(app, '/test/simBundles', { roles: [AuthRole.frankfurtDispatcher] })
//  * const response = request.send();
//  */
// export const fakeGetRequest = (app: INestApplication, url: string) => {
//   const httpServer = app.getHttpServer();
//   const request = supertest(httpServer).get(url);
//   // if (options?.roles) {
//   //   const roleIds = options.roles.map((roleKey) => {
//   //     return AUTH_ROLES[roleKey].test.id;
//   //   });
//   //   request.set('groups', roleIds.join(','));
//   // }
// };

// /**
//  * Creates a fake post request.
//  * @param app The Nest application instance.
//  * @param url The request url.
//  * @returns The request.
//  * @example
//  * import { fakeGetRequest } from 'test/helpers/app-e2e-spec.ts';
//  * import { AuthRole } from 'src/auth/config/roles.config';
//  *
//  * const request = fakeGetRequest(app, '/test/simBundles', { roles: [AuthRole.frankfurtDispatcher] })
//  * const response = request.send({ foo:"bar" });
//  */
// export const fakePostRequest = (app: INestApplication, url: string) => {
//   const httpServer = app.getHttpServer();
//   const request = supertest(httpServer).post(url);
//   // if (options?.roles) {
//   //   const roleIds = options.roles.map((roleKey) => {
//   //     return AUTH_ROLES[roleKey].test.id;
//   //   });
//   //   request.set('groups', roleIds.join(','));
//   // }
//   return request;
// };
