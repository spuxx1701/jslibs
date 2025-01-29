import { Route, Router } from '@solidjs/router';
import '@spuxx/browser-utils/styles';
import '@spuxx/browser-utils/themes';
import { For, type Component } from 'solid-js';
import './styles/index.css';
import { routes } from './routes/routes';

const App: Component = () => {
  return (
    <main>
      <Router>
        <For each={routes}>
          {(route) => <Route path={route.path} component={route.component} />}
        </For>
      </Router>
    </main>
  );
};

export default App;
