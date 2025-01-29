import { RouteProps } from '@solidjs/router';
import { IndexRoute } from './index.route';
import { ButtonRoute } from './components/input/button.route';
import { ContainerRoute } from './components/layout/container.route';
import { DividerRoute } from './components/layout/divider.route';

export const routes: RouteProps[] = [
  {
    path: '/',
    component: IndexRoute,
  },
  {
    path: '/components/input/button',
    component: () => ButtonRoute,
  },
  {
    path: '/components/layout/container',
    component: () => ContainerRoute,
  },
  {
    path: '/components/layout/divider',
    component: () => DividerRoute,
  },
];
