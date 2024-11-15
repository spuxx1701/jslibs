/// <reference types="vitest" />
import baseConfig from '../../vite.config.nest';
import { mergeConfig, defineConfig } from 'vite';
import { resolve } from 'path';
import { peerDependencies } from './package.json';

export default mergeConfig(
  baseConfig,
  defineConfig({
    build: {
      lib: {
        entry: {
          main: resolve(__dirname, 'src/main.ts'),
        },
        name: '@spuxx/nest-testing',
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        external: [...Object.keys(peerDependencies)],
      },
    },
  }),
);
