/// <reference types="vitest" />
import baseConfig from '../../vite.config';
import { mergeConfig, defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default mergeConfig(
  baseConfig,
  defineConfig({
    server: {
      port: 3000,
    },
    plugins: [
      ...baseConfig.plugins!,
      // https://www.npmjs.com/package/vite-plugin-node#get-started
      VitePluginNode({
        adapter: 'nest',
        tsCompiler: 'swc',
        appPath: 'src/main.ts',
        exportName: 'app',
        initAppOnBoot: true,
      }),
    ],
  }),
);
