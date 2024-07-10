/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';

import './index.css';
import App from './App';
import MainMenu from './MainMenu';
import Projects from './Projects';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

//render(() => <App />, root!);

render(
  () => (
    <Router>
      <Route path="/" component={App}/>
      <Route path="MainMenu" component={MainMenu}/>
      <Route path="Projects" component={Projects}/>
    </Router>
  ),
  root!
);
