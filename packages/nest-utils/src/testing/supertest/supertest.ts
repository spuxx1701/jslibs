import { INestApplication } from '@nestjs/common';
import supertest, { Request } from 'supertest';

/**
 * `Supertest` is an abstraction of the `supertest` package that allows easily faking
 * incoming HTTP requests during tests.
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
  constructor(private readonly app: INestApplication) {}

  /**
   * Creates a fake HTTP `GET` request.
   * @param url The request URL.
   * @returns The request.
   * @example
   * const response = await supertest.get("/hello");
   * expect(response.statusCode).toBe(200);
   */
  get(url: string): Request {
    const httpServer = this.app.getHttpServer();
    const request: Request = supertest(httpServer).get(url);
    return request;
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
