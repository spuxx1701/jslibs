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
    cssCodeSplit: true,
    lib: {
      entry: {
        main: resolve(__dirname, 'src/main.ts'),
        styles: resolve(__dirname, 'src/styles.css'),
        themes: resolve(__dirname, 'src/themes.css'),
      },
      name: '@spuxx/browser-utils',
      formats: ['es'],
    },
  },
  test: {
    environment: 'jsdom',
    silent: true,
    reporters: ['default', 'junit'],
    outputFile: 'reports/junit/junit.xml',
    coverage: {
      provider: 'v8',
      all: true,
      include: ['src/**/*.ts'],
      exclude: ['src/main.ts', '**/index.ts', '**/*types.ts', '**/*.d.ts'],
      reportsDirectory: 'reports/vitest/coverage',
      reporter: ['text', 'json'],
    },
  },
});
