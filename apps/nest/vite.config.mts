/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import swc from 'unplugin-swc';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    // esbuild doesn't support a couple of features that nestjs requires, so instead
    // we use swc. For example, see: https://github.com/nestjs/nest/issues/9228
    swc.vite({
      jsc: {
        parser: {
          syntax: 'typescript',
          decorators: true,
          dynamicImport: true,
        },
        transform: {
          legacyDecorator: true,
          decoratorMetadata: true,
        },
      },
      sourceMaps: true,
    }),
  ],
  ssr: {
    target: 'node',
    noExternal: ['dotenv'],
  },
  build: {
    target: 'node',
    outDir: 'dist',
    ssr: true,
    rollupOptions: {
      treeshake: {
        preset: 'smallest',
      },
      input: {
        main: './src/main.ts',
      },
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
      include: ['src/**/*.ts'],
      exclude: ['src/main.ts', '**/index.ts'],
      reportsDirectory: 'reports/coverage',
      reporter: ['text', 'cobertura'],
    },
  },
});
