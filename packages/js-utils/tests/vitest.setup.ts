import { vi } from 'vitest';
import { createMockServer } from 'tests/msw/create-mock-server';
import { chuckNorrisJokesHandlers } from 'tests/msw/handlers/chuck-norris-jokes.handlers';

createMockServer([...chuckNorrisJokesHandlers]);

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});
