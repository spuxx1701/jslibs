/// <reference types="vitest" />
import baseConfig from '../../vite.config';
import { mergeConfig, defineConfig } from 'vite';
import { resolve } from 'path';

export default mergeConfig(
  baseConfig,
  defineConfig({
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
  }),
);
