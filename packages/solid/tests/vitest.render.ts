import { render as solidRender } from 'solid-js/web';
import type { Component } from 'solid-js';

export function render(Comp: Component) {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const dispose = solidRender(() => Comp, container);

  return {
    container,
    dispose,
    cleanup: () => {
      dispose();
      container.remove();
    },
  };
}
