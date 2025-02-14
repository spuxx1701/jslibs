import { vi } from 'vitest';

vi.stubEnv('AUTH_CLIENT_SECRET', crypto.randomUUID());
vi.stubEnv('AUTH_COOKIE_SECRET', crypto.randomUUID());
