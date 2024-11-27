import { emptyDir } from 'jsr:@deno/dnt';
import { build } from 'vite';

const outDir = './.npm';
await emptyDir(outDir);

await build({
  build: {
    lib: {
      entry: {
        main: 'src/main.ts',
      },
      formats: ['es'],
    },
    outDir: `${outDir}/dist`,
  },
});

Deno.copyFileSync('LICENSE.md', `${outDir}/LICENSE.md`);
Deno.copyFileSync('README.md', `${outDir}/README.md`);
Deno.copyFileSync('package.json', `${outDir}/package.json`);
