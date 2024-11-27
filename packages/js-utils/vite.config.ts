import { defineConfig } from 'vite';
import deno from '@deno/vite-plugin';

export default defineConfig({
  // plugins: [
  //   dts({
  //     include: ['src/**/*'],
  //     exclude: ['*.{test,spec}.*'],
  //     rollupTypes: true,
  //   }),
  //   ...deno(),
  // ],
  plugins: [deno()],
  build: {
    lib: {
      entry: {
        main: 'src/main.ts',
      },
      name: '@spuxx/js-utils',
      formats: ['es'],
    },
  },
});
