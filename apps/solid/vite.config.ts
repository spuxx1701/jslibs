import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  css: {
    modules: {
      scopeBehaviour: 'global',
    },
  },
  build: {
    target: 'esnext',
  },
});
