import { Component, For } from 'solid-js';
import { routes } from '../../routes/routes';
import { Container } from '@spuxx/solid';

export const Navigation: Component = () => {
  return (
    <Container variant="contained">
      <ul class="list-none">
        <h2>Navigation</h2>
        <For each={routes}>
          {(route) => (
            <li>
              <a class="decoration-transparent" href={route.path}>
                {route.path}
              </a>
            </li>
          )}
        </For>
      </ul>
    </Container>
  );
};
