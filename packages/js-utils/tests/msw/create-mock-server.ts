import { RequestHandler, WebSocketHandler } from 'msw';
import { setupServer } from 'msw/node';

export const createMockServer = (requestHandlers: Array<RequestHandler | WebSocketHandler>) => {
  const mockServer = setupServer(...requestHandlers);
  mockServer.listen({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onUnhandledRequest: (req: Request, print: any) => {
      // Don't handle local requests
      if (req.url.includes('127.0.0.1') || req.url.includes('localhost')) {
        return;
      }
      // Disallow all other unhandled requests
      print.error();
    },
  });
  return mockServer;
};
