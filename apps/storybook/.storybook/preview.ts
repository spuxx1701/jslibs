const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Overview', 'js-utils', 'browser-utils'],
      },
    },
  },
};

export default preview;
