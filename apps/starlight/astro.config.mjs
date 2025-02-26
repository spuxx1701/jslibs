// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  base: '/jslibs/',
  site: 'https://spuxx-dev.github.io',
  integrations: [
    starlight({
      title: '@spuxx/jslibs',
      favicon: '/favicon.png',
      social: {
        github: 'https://github.com/spuxx-dev/jslibs',
        blueSky: 'https://bsky.app/profile/spuxx.bsky.social',
      },
      sidebar: [
        {
          label: 'js-utils',
          items: [
            { label: 'Introduction', slug: 'js-utils' },
            {
              label: 'Types',
              slug: 'js-utils/types',
            },
            {
              label: 'Services',
              autogenerate: { directory: 'js-utils/services' },
            },
            {
              label: 'Utilities',
              autogenerate: { directory: 'js-utils/utils' },
            },
          ],
        },
        {
          label: 'browser-utils',
          items: [{ label: 'Introductin', slug: 'browser-utils' }],
        },
      ],
    }),
  ],
});
