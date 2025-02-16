import { Component } from 'solid-js';

export const Markdown: Component<{ html?: string }> = (props) => {
  const { html } = props;
  return <div>Hello World!</div>;
  // if (!html) return null;
  // return <div innerHTML={props.html} />;
};
