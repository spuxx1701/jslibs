/* eslint-disable @typescript-eslint/no-explicit-any */
import { type AxiosError } from 'axios';
import { ServiceMixin } from '../mixin';
import {
  EndpointFunction,
  HttpError,
  type EndpointDefinition,
  type Endpoints,
  type HttpClientOptions,
} from './types';

type TransformedReturnType<T extends EndpointDefinition> = T['transformer'] extends undefined
  ? Awaited<ReturnType<T['function']>>
  : Awaited<ReturnType<NonNullable<T['transformer']>>>;

type HttpClient<T extends Endpoints> = {
  [K in keyof T]: (...args: Parameters<T[K]['function']>) => Promise<TransformedReturnType<T[K]>>;
} & {
  new (...args: any[]): object;
};

/**
 * A helper function to create an endpoint definition in a type-safe way.
 * @param definition The endpoint definition.
 */
export function defineEndpoint<
  TFunction extends EndpointFunction,
  TTransformedResult = Awaited<ReturnType<TFunction>>,
>(
  definition: EndpointDefinition<TFunction, TTransformedResult>,
): EndpointDefinition<TFunction, TTransformedResult> {
  return definition;
}

/**
 * A mixin that adds HTTP client functionality to a class. Can be used to create a strongly typed
 * HTTP client.
 * @param options The options for the HTTP client.
 * @example
 * import { HttpClientMixin, defineEndpoint } from '@spuxx/js-utils';
 *
 * // Define your endpoints
 * const endpoints = {
 *   getRandomJoke: defineEndpoint({
 *     function: async () => {
 *       const response = await fetch('https://api.chucknorris.io/jokes/random');
 *     },
 *     transformer: async (response: Response}): string => {
 *       const json = await response.json();
 *       return json.value;
 *     },
 *   }),
 * }
 *
 * // Create your client
 * class HttpClient extends HttpClientMixin({ endpoints }) {}
 *
 * // Use your client
 * const joke = await HttpClient.getRandomJoke();
 * console.log(joke); // Chuck Norris can divide by zero.
 */
export function HttpClientMixin<TEndpoints extends Endpoints>(
  options: HttpClientOptions<TEndpoints>,
): HttpClient<TEndpoints> {
  class Client extends ServiceMixin<Client>() {
    private options = options;

    static async invokeEndpoint(endpointDef: EndpointDefinition, ...args: any[]): Promise<any> {
      let response: any;
      try {
        // Call the endpoint function with the provided arguments
        response = await endpointDef.function(...args);
        if (
          response?.constructor.name === 'HttpResponse' ||
          response?.constructor.name === 'Response'
        ) {
          // In case of fetch, we need to do further processing
          response = await Client.handleFetchResponse(response);
        }
      } catch (error: unknown) {
        await Client.handleError(endpointDef, error);
        return;
      }

      if (typeof endpointDef.transformer === 'function') {
        return endpointDef.transformer(response);
      } else {
        return response;
      }
    }

    private static async handleFetchResponse(response: Response): Promise<Response> {
      if (!response.ok) {
        let body: object | string = '';
        try {
          body = await response.json();
        } catch (error) {
          body = await response.text();
        }
        throw new HttpError({
          name: 'FetchError',
          status: response.status,
          message: response.statusText,
          body,
        });
      }
      return response;
    }

    private static async handleError(endpointDef: EndpointDefinition, error: unknown) {
      // Combine endpoint-specific and global error handlers
      const endpointErrorHandlers = endpointDef.errorHandlers || [];
      const allErrorHandlers = [
        ...endpointErrorHandlers,
        ...(Client.instance.options.globalErrorHandlers ?? []),
      ];

      // Determine error details
      let httpError: HttpError;
      if (error instanceof HttpError) {
        httpError = error;
      } else if ((error as AxiosError).name === 'AxiosError') {
        const axiosError = error as AxiosError;
        httpError = new HttpError({
          name: 'AxiosError',
          status: axiosError.response?.status ?? axiosError.status,
          message: axiosError.response?.statusText ?? axiosError.message,
          body: axiosError.response?.data ?? undefined,
        });
      } else {
        httpError = new HttpError({
          name: 'UnknownError',
          message: (error as Error).message,
        });
      }

      // Execute all error handlers sequentially
      let errorHasBeenHandled = false;
      const { status } = httpError;
      for (const handler of allErrorHandlers) {
        // Check status filter
        if (status && handler.statusFilter && !handler.statusFilter(status)) {
          continue;
        }
        await handler.function(httpError);
        errorHasBeenHandled = true;
        if (handler.continue) continue;
        else break;
      }

      if (!errorHasBeenHandled) {
        throw error;
      }
    }
  }

  const { endpoints } = options;

  // Iterate through each endpoint and create a corresponding method on the Client
  Object.entries(endpoints).forEach(([key, endpointDef]) => {
    (Client as any)[key] = function (
      this: typeof Client,
      ...args: Parameters<typeof endpointDef.function>
    ): Promise<TransformedReturnType<typeof endpointDef>> {
      return Client.invokeEndpoint(endpointDef, ...args);
    };
  });

  // Cast the Client class to the expected HttpClient type
  return Client as unknown as HttpClient<TEndpoints>;
}
