/// <reference types="vitest" />
import baseConfig from '../../vite.config';
import { mergeConfig, defineConfig } from 'vite';
import { resolve } from 'path';
import { VitePluginNode } from 'vite-plugin-node';
import { peerDependencies } from './package.json';

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [
      ...baseConfig.plugins!,
      VitePluginNode({
        adapter: 'nest',
        tsCompiler: 'swc',
        appPath: 'src/main.ts',
        exportName: 'app',
      }),
    ],
    build: {
      lib: {
        entry: {
          main: resolve(__dirname, 'src/main.ts'),
        },
        name: '@spuxx/nest-utils',
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        external: [...Object.keys(peerDependencies)],
      },
    },
  }),
);
