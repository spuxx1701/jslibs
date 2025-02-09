import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  './apps/nest/vite.config.mts',
  './apps/react/vite.config.ts',
  './packages/nest-testing/vite.config.ts',
  './packages/browser-utils/vite.config.ts',
  './packages/nest-utils/vite.config.ts',
  './packages/js-utils/vite.config.ts',
  './packages/solid/vite.config.ts',
]);
