import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [tsConfigPaths(), solidPlugin()],
  build: {
    target: 'esnext',
  },
});
