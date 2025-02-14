/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*'],
      exclude: ['*.{test,spec}.*'],
      tsconfigPath: './tsconfig.json',
      rollupTypes: true,
    }),
    tsconfigPaths(),
  ],
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, 'src/main.ts'),
      },
      name: '@spuxx/js-utils',
      formats: ['es'],
    },
  },
  test: {
    environment: 'node',
    globals: true,
    silent: true,
    setupFiles: './tests/vitest.setup.ts',
    reporters: ['default', 'junit'],
    outputFile: 'reports/junit/junit.xml',
    coverage: {
      provider: 'v8',
      all: true,
      include: ['**/*.ts'],
      reportsDirectory: 'reports/vitest/coverage',
      reporter: ['text', 'json'],
    },
  },
});
