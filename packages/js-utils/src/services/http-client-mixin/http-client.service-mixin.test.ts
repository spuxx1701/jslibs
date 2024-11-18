import axios, { type AxiosResponse } from 'axios';
import { defineEndpoint, HttpClientMixin } from './http-client.service-mixin';
import { HttpClientOptions, HttpError } from './types';
import { sleep } from '../../main';

describe('HttpClientMixin', () => {
  describe('endpoint definition', () => {
    it('should assign all given endpoints', async () => {
      const endpoints = {
        getRandomJoke: defineEndpoint({
          function: async (): Promise<Response> => {
            return fetch('https://api.chucknorris.io/jokes/random');
          },
        }),
        getRandomFromCategory: defineEndpoint({
          function: async (category: string): Promise<Response> => {
            return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
          },
        }),
      };

      const options: HttpClientOptions<typeof endpoints> = {
        endpoints,
      };

      class HttpClient extends HttpClientMixin(options) {}
      expect(HttpClient.getRandomJoke).toBeTypeOf('function');
      expect(HttpClient.getRandomFromCategory).toBeTypeOf('function');
    });
  });

  describe('basic call handling', () => {
    it('should pass down arguments', async () => {
      const endpoints = {
        findById: defineEndpoint({
          function: async (id: string, include: string[]) => {
            expect(id).toBe('123');
            expect(include).toEqual(['foo', 'bar']);
          },
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      expect.assertions(2);
      await HttpClient.findById('123', ['foo', 'bar']);
    });
  });

  describe('basic error handling', () => {
    it('should trigger the error handler', async () => {
      const endpoints = {
        throw: defineEndpoint({
          function: async (): Promise<Response> => {
            throw new Error('Oops!');
          },
          errorHandlers: [
            {
              function: () => {
                throw new Error('Caught!');
              },
            },
          ],
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      await expect(HttpClient.throw()).rejects.toThrowError('Caught!');
    });

    it("'continue' flag should work as expected", async () => {
      const firstHandler = vi.fn(() => {});
      const secondHandler = vi.fn(() => {});
      const thirdHandler = vi.fn(() => {});
      const endpoints = {
        getJoke: defineEndpoint({
          function: async (): Promise<Response> => {
            return fetch('https://api.chucknorris.io/jokes/500');
          },
          errorHandlers: [
            {
              function: firstHandler,
              continue: true,
            },
            {
              function: secondHandler,
            },
            {
              function: thirdHandler,
            },
          ],
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      await HttpClient.getJoke();
      expect(firstHandler).toHaveBeenCalled();
      expect(secondHandler).toHaveBeenCalled();
      expect(thirdHandler).not.toHaveBeenCalled();
    });

    it('local error handlers should be called before global error handlers', async () => {
      let localHandlerCallTime: Date | undefined;
      let globalHandlerCallTime: Date | undefined;
      const localHandler = vi.fn(async () => {
        localHandlerCallTime = new Date();
        await sleep(5);
      });
      const globalHandler = vi.fn(async () => {
        globalHandlerCallTime = new Date();
        await sleep(5);
      });
      const endpoints = {
        getJoke: defineEndpoint({
          function: async (): Promise<Response> => {
            return fetch('https://api.chucknorris.io/jokes/500');
          },
          errorHandlers: [
            {
              function: localHandler,
              continue: true,
            },
          ],
        }),
      };
      class HttpClient extends HttpClientMixin({
        endpoints,
        globalErrorHandlers: [
          {
            function: globalHandler,
            continue: true,
          },
        ],
      }) {}
      await HttpClient.getJoke();
      expect(localHandler).toHaveBeenCalled();
      expect(globalHandler).toHaveBeenCalled();
      expect(localHandlerCallTime).toBeDefined();
      expect(globalHandlerCallTime).toBeDefined();
      expect(localHandlerCallTime!.getTime()).toBeLessThan(globalHandlerCallTime!.getTime());
    });

    it('should throw an error if transformation fails', () => {
      const endpoints = {
        getJoke: defineEndpoint({
          function: async (): Promise<Response> => {
            return fetch('https://api.chucknorris.io/jokes/200');
          },
          transformer: async () => {
            throw new Error('Oops!');
          },
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      expect(HttpClient.getJoke()).rejects.toThrowError('Oops!');
    });
  });

  describe('fetch support', () => {
    it('should successfully perform a get request (fetch)', async () => {
      const errorHandler = vi.fn(() => {});
      const endpoints = {
        getJoke: defineEndpoint({
          function: async (): Promise<Response> => {
            return await fetch('https://api.chucknorris.io/jokes/200');
          },
          errorHandlers: [
            {
              function: errorHandler,
            },
          ],
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      const joke = await (await HttpClient.getJoke()).json();
      expect(errorHandler).not.toHaveBeenCalled();
      expect(joke).toEqual({
        id: '200',
        value: 'Chuck Norris can divide by zero.',
      });
    });

    it('should transform the response (fetch)', async () => {
      const errorHandler = vi.fn(() => {});
      const endpoints = {
        getJoke: defineEndpoint({
          function: async (): Promise<Response> => {
            return fetch('https://api.chucknorris.io/jokes/200');
          },
          transformer: async (response: Response): Promise<string> => {
            return (await response.json()).value;
          },
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      const joke = await HttpClient.getJoke();
      expect(errorHandler).not.toHaveBeenCalled();
      expect(joke).toBe('Chuck Norris can divide by zero.');
    });

    it('should trigger the error handler (fetch)', async () => {
      const errorHandler = vi.fn(() => {});
      const endpoints = {
        getJoke: defineEndpoint({
          function: async (): Promise<Response> => {
            return fetch('https://api.chucknorris.io/jokes/500');
          },
          errorHandlers: [
            {
              function: errorHandler,
            },
          ],
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      await HttpClient.getJoke();
      expect(errorHandler).toHaveBeenCalled();
      const [error] = errorHandler.mock.lastCall as unknown as [HttpError];
      expect(error).toEqual(
        new HttpError({
          name: 'FetchError',
          status: 500,
          message: 'Internal Server Error',
        }),
      );
    });

    it('should include the error payload (fetch)', async () => {
      const errorHandler = vi.fn(() => {});
      const endpoints = {
        getJoke: defineEndpoint({
          function: async (): Promise<Response> => {
            return fetch('https://api.chucknorris.io/jokes/400');
          },
          errorHandlers: [
            {
              function: errorHandler,
            },
          ],
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      await HttpClient.getJoke();
      expect(errorHandler).toHaveBeenCalled();
      const [error] = errorHandler.mock.lastCall as unknown as [HttpError];
      expect(error).toEqual(
        new HttpError({
          name: 'FetchError',
          status: 400,
          message: 'Bad Request',
          body: {
            statusCode: 400,
            message: ['400 is not a valid id'],
          },
        }),
      );
    });

    it('should only trigger the error handler that matches the status filter (fetch)', async () => {
      const handler401 = vi.fn(() => {});
      const handler403 = vi.fn(() => {});
      const handlerAll = vi.fn(() => {});
      const endpoints = {
        getJoke: defineEndpoint({
          function: async (): Promise<Response> => {
            return fetch('https://api.chucknorris.io/jokes/403');
          },
          errorHandlers: [
            {
              function: handler401,
              statusFilter: (status) => status === 401,
            },
            {
              function: handler403,
              statusFilter: (status) => status === 403,
            },
            {
              function: handlerAll,
            },
          ],
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      await HttpClient.getJoke();
      expect(handler401).not.toHaveBeenCalled();
      expect(handler403).toHaveBeenCalled();
      expect(handlerAll).not.toHaveBeenCalled();
    });
  });

  describe('axios support', () => {
    it('should successfully perform a get request (axios)', async () => {
      const errorHandler = vi.fn(() => {});
      const endpoints = {
        getJoke: defineEndpoint({
          function: async (): Promise<AxiosResponse> => {
            return axios.get('https://api.chucknorris.io/jokes/200');
          },
          errorHandlers: [
            {
              function: errorHandler,
            },
          ],
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      const response = await await HttpClient.getJoke();
      const joke = response.data;
      expect(errorHandler).not.toHaveBeenCalled();
      expect(joke).toEqual({
        id: '200',
        value: 'Chuck Norris can divide by zero.',
      });
    });

    it('should transform the response (axios)', async () => {
      const errorHandler = vi.fn(() => {});
      const endpoints = {
        getJoke: defineEndpoint({
          function: async (): Promise<AxiosResponse> => {
            return axios.get('https://api.chucknorris.io/jokes/200');
          },
          transformer: (response: AxiosResponse): string => {
            return response.data.value;
          },
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      const joke = await HttpClient.getJoke();
      expect(errorHandler).not.toHaveBeenCalled();
      expect(joke).toBe('Chuck Norris can divide by zero.');
    });

    it('should trigger the error handler (axios)', async () => {
      const errorHandler = vi.fn(() => {});
      const endpoints = {
        getJoke: defineEndpoint({
          function: async (): Promise<AxiosResponse> => {
            return axios.get('https://api.chucknorris.io/jokes/500');
          },
          errorHandlers: [
            {
              function: errorHandler,
            },
          ],
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      await HttpClient.getJoke();
      expect(errorHandler).toHaveBeenCalled();
      const [error] = errorHandler.mock.lastCall as unknown as [HttpError];
      expect(error).toEqual(
        new HttpError({
          name: 'FetchError',
          status: 500,
          message: 'Internal Server Error',
        }),
      );
    });

    it('should include the error payload (axios)', async () => {
      const errorHandler = vi.fn(() => {});
      const endpoints = {
        getJoke: defineEndpoint({
          function: async (): Promise<AxiosResponse> => {
            return axios.get('https://api.chucknorris.io/jokes/400');
          },
          errorHandlers: [
            {
              function: errorHandler,
            },
          ],
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      await HttpClient.getJoke();
      expect(errorHandler).toHaveBeenCalled();
      const [error] = errorHandler.mock.lastCall as unknown as [HttpError];
      expect(error).toEqual(
        new HttpError({
          name: 'FetchError',
          status: 400,
          message: 'Bad Request',
          body: {
            statusCode: 400,
            message: ['400 is not a valid id'],
          },
        }),
      );
    });

    it('should only trigger the error handler that matches the status filter (axios)', async () => {
      const handler401 = vi.fn(() => {});
      const handler403 = vi.fn(() => {});
      const handlerAll = vi.fn(() => {});
      const endpoints = {
        getJoke: defineEndpoint({
          function: async (): Promise<Response> => {
            return axios.get('https://api.chucknorris.io/jokes/403');
          },
          errorHandlers: [
            {
              function: handler401,
              statusFilter: (status) => status === 401,
            },
            {
              function: handler403,
              statusFilter: (status) => status === 403,
            },
            {
              function: handlerAll,
            },
          ],
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      await HttpClient.getJoke();
      expect(handler401).not.toHaveBeenCalled();
      expect(handler403).toHaveBeenCalled();
      expect(handlerAll).not.toHaveBeenCalled();
    });
  });
});
