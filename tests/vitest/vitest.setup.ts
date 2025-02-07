import { vi } from 'vitest';
import { chuckNorrisJokesHandlers } from '../msw/handlers/chuck-norris-jokes.handlers';
import { createMockServer } from '../msw/create-mock-server';

createMockServer([...chuckNorrisJokesHandlers]);

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});
