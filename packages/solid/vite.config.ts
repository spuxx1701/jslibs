/// <reference types="vitest/config" />
/// <reference types="@vitest/browser/matchers" />
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { peerDependencies } from './package.json';

export default defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      include: ['src/**/*'],
      tsconfigPath: './tsconfig.build.json',
      rollupTypes: true,
    }),
    tsconfigPaths({
      configNames: ['tsconfig.build.json'],
    }),
  ],
  build: {
    target: 'esnext',
    lib: {
      entry: {
        main: './src/main.ts',
        modal: './src/modal/index.ts',
      },
      name: '@spuxx/solid',
      formats: ['es'],
    },
    rollupOptions: {
      external: [/^solid-js($|\/)/, ...Object.keys(peerDependencies)],
      output: {
        preserveModules: true,
      }
    },
  },
  test: {
    watch: false,
    globals: true,
    deps: {
      optimizer: {
        web: {
          // Required for @iconify-icon/solid not to break the test build
          include: ['@iconify-icon/solid'],
        },
      },
    },
    reporters: ['default', 'junit'],
    outputFile: 'reports/junit/junit.xml',
    coverage: {
      enabled: true,
      all: true,
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/main.ts', '**/index.ts', '**/*types.ts', '**/*.d.ts'],
      reportsDirectory: 'reports/vitest/coverage',
      reporter: ['text', 'json'],
    },
    // browser: {
    //   enabled: false,
    //   provider: 'playwright',
    //   // TODO: When we uncomment this, we run into this issue:
    //   // https://github.com/solidjs/vite-plugin-solid/issues/170
    //   // instances: [
    //   // { browser: 'chromium' },
    //   // TODO: According to vitest, only istanbul supports collecting coverage from
    //   // multiple browser instances. Do we need to switch to istanbul?
    //   // { browser: "firefox" },
    //   // { browser: "webkit" },
    //   // ],
    // },
  },
});
