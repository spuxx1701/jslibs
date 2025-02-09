import { afterEach, vi } from 'vitest';
import { createMockServer } from './msw/create-mock-server';
import { chuckNorrisJokesHandlers } from './msw/handlers/chuck-norris-jokes.handlers';

createMockServer([...chuckNorrisJokesHandlers]);

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});
