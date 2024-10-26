/* eslint-disable @typescript-eslint/no-explicit-any */
import { INestApplication } from '@nestjs/common';
import supertest, { Request } from 'supertest';
import { SessionResource } from '../../auth';
import { SupertestOptions } from './types';

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
   * Emits a fake `GET` request.
   * @param url The request URL.
   * @param options (optional) Additional options.
   * @returns The request.
   */
  get(url: string, options?: SupertestOptions): Request {
    const request: Request = supertest(this.server).get(url);
    this.setupRequest(request, options);
    return request;
  }

  /**
   * Emits a fake `POST` request.
   * @param url The request URL.
   * @param options (optional) Additional options.
   * @returns The request.
   */
  post(url: string, options?: SupertestOptions): Request {
    const request: Request = supertest(this.server).post(url);
    this.setupRequest(request, options);
    return request;
  }

  /**
   * Emits a fake `PUT` request.
   * @param url The request URL.
   * @param options (optional) Additional options.
   * @returns The request.
   */
  put(url: string, options?: SupertestOptions): Request {
    const request: Request = supertest(this.server).put(url);
    this.setupRequest(request, options);
    return request;
  }

  /**
   * Emits a fake `PATCH` request.
   * @param url The request URL.
   * @param options (optional) Additional options.
   * @returns The request.
   */
  patch(url: string, options?: SupertestOptions): Request {
    const request: Request = supertest(this.server).patch(url);
    this.setupRequest(request, options);
    return request;
  }

  /**
   * Emits a fake `DELETE` request.
   * @param url The request URL.
   * @param options (optional) Additional options.
   * @returns The request.
   */
  delete(url: string, options?: SupertestOptions): Request {
    const request: Request = supertest(this.server).delete(url);
    this.setupRequest(request, options);
    return request;
  }

  /**
   * Emits a fake `OPTIONS` request.
   * @param url The request URL.
   * @param options (optional) Additional options.
   * @returns The request.
   */
  options(url: string, options?: SupertestOptions): Request {
    const request: Request = supertest(this.server).options(url);
    this.setupRequest(request, options);
    return request;
  }

  private get server() {
    return this.app.getHttpServer();
  }

  private setupRequest(request: Request, options?: SupertestOptions) {
    const { session, body } = { session: this.session, ...options };
    if (session) request.set('X-Mock-Session', JSON.stringify(session));
    if (body) request.send(body);
  }
}
