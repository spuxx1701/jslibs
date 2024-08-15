/// <reference types="vitest" />
import baseConfig from '../../vite.config.nest';
import { mergeConfig, defineConfig } from 'vite';

export default mergeConfig(
  baseConfig,
  defineConfig({
    build: {
      rollupOptions: {
        input: {
          main: './src/main.ts',
        },
      },
    },
  }),
);
