/// <reference types="@vitest/browser/providers/playwright" />
import { defineConfig } from 'vitest/config';
import solidPlugin from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { peerDependencies } from './package.json';

export default defineConfig({
  plugins: [
    solidPlugin({
      solid: {
        generate: 'dom',
      },
    }),
    dts({
      include: ['src/**/*'],
      exclude: ['*.{test,spec}.*'],
      tsconfigPath: './tsconfig.json',
      rollupTypes: true,
    }),
    tsconfigPaths(),
  ],
  build: {
    target: 'esnext',
    lib: {
      entry: {
        main: './src/main.ts',
      },
      name: '@spuxx/solid',
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
  },
  resolve: {
    preserveSymlinks: true,
  },
  test: {
    include: ['./src/**/*.test.{ts,tsx}'],
    // silent: true,
    // reporters: ['default', 'junit'],
    // outputFile: 'reports/junit/junit.xml',
    browser: {
      enabled: true,
      provider: 'playwright',
      // headless: true,
      // name: 'chromium',
      // headless: true,
      // https://vitest.dev/guide/browser/playwright
      instances: [{ browser: 'chromium' }],
      // instances: [{ browser: 'chromium' }, { browser: 'firefox' }],
      // configs: [{ browser: 'chromium' }, { browser: 'firefox' }],
    },
    // coverage: {
    //   provider: 'v8',
    //   all: true,
    //   include: ['src/**/*.ts'],
    //   reportsDirectory: 'reports/vitest/coverage',
    //   reporter: ['text', 'json'],
    // },
  },
});
