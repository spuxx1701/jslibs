import baseConfig from './vite.config';
import { mergeConfig, defineConfig } from 'vite';

export default mergeConfig(
  baseConfig,
  defineConfig({
    ssr: {
      target: 'node',
    },
    build: {
      ssr: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          preserveModules: true,
          preserveModulesRoot: './src',
        },
      },
    },
  }),
);
