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
      exclude: ['*.{test,spec}.*'],
      tsconfigPath: './tsconfig.json',
      rollupTypes: true,
    }),
    tsconfigPaths(),
  ],
  build: {
    target: 'esnext',
    lib: {
      entry: {
        main: './src/main.ts',
      },
      name: '@spuxx/solid',
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
  },
});
