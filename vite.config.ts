import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import swc from 'unplugin-swc';

// https://vitejs.dev/config/
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
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [`${__dirname}/tests/vitest/vitest.setup.ts`],
    reporters: ['default', 'junit'],
    outputFile: 'reports/vitest/junit/junit.xml',
    coverage: {
      provider: 'v8',
      all: true,
      include: ['packages/**/src/**/*.ts', 'apps/**/src/**/*.ts'],
      exclude: [
        'apps/react/**',
        '**/src/main.ts',
        '**/*types.ts',
        '**/*.d.ts',
        '**/*test.ts',
        '**/index.ts',
        '**/private/**',
      ],
      reportsDirectory: 'reports/vitest/coverage',
      reporter: ['text', 'cobertura'],
    },
  },
});
