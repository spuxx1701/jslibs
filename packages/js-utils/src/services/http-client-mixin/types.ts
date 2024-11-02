/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Defines how the client should handle errors.
 */
export type ErrorHandler = {
  /**
   * The function to be called when an error occurs.
   * @param error The error.
   */
  function: (error: HttpError | unknown) => void | Promise<void>;
  /**
   * The status code of the response that will trigger this error handler. If left empty,
   * the error handler will be called for all errors.
   */
  statusFilter?: (status: number) => boolean;
  /**
   * Whether the client should continue to call subsequent error handlers after this one.
   * @default false
   */
  continue?: boolean;
};

export type EndpointFunction = (...args: any[]) => Promise<any>;

/**
 * The definition of an endpoint to be used by `HttpClient`.
 */
export interface EndpointDefinition<
  TFunction extends EndpointFunction = EndpointFunction,
  TTransformedResult = any,
> {
  /**
   * The function that will be called when the endpoint is invoked.
   */
  function: TFunction;
  /**
   * A function that will be called to transform the response from the server.
   */
  transformer?: (response: Awaited<ReturnType<TFunction>>) => TTransformedResult;
  /**
   * The set of error handlers for this endpoint. These local error handlers will be called
   * before the global error handlers.
   */
  errorHandlers?: ErrorHandler[];
}
/**
 * The set of endpoints to be used by `HttpClient`.
 */
export type Endpoints = Record<string, EndpointDefinition>;

/**
 * The options to hand over to `HttpClient`.
 */
export interface HttpClientOptions<TEndpoints extends Endpoints> {
  /**
   * The set of endpoints to be used by the client.
   */
  endpoints: TEndpoints;
  /**
   * A set of global error handlers. These will be called for every error that occurs,
   * regardless of the endpoint. These global error handlers will be called after any
   * local error handlers.
   */
  globalErrorHandlers?: ErrorHandler[];
}

export class HttpError extends Error {
  status?: number;
  body?: object | string;

  constructor(init: HttpError) {
    super();
    Object.assign(this, init);
  }
}
