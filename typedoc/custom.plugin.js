/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.on('endPage', (page) => {
    page.contents = page.contents.replace('# HEADER', '');
  });
}
