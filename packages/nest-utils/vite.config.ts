/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { peerDependencies } from './package.json';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

import swc from 'unplugin-swc';

export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*'],
      exclude: ['*.{test,spec}.*'],
      tsconfigPath: './tsconfig.json',
      rollupTypes: true,
    }),
    tsconfigPaths(),
    // esbuild doesn't support a couple of features that nestjs requires, so instead
    // we use swc. For example, see: https://github.com/nestjs/nest/issues/9228
    swc.vite({
      module: { type: 'es6' },
      jsc: {
        target: 'esnext',
        parser: {
          syntax: 'typescript',
          decorators: true,
        },
        transform: {
          legacyDecorator: true,
          decoratorMetadata: true,
        },
        keepClassNames: true,
        preserveAllComments: true,
      },
    }),
  ],
  ssr: {
    target: 'node',
  },
  build: {
    ssr: true,
    minify: false,
    lib: {
      entry: {
        main: resolve(__dirname, 'src/main.ts'),
      },
      name: '@spuxx/nest-testing',
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
  },
  test: {
    environment: 'node',
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
