/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, HashRouter } from '@solidjs/router';

import './index.css';
import App from './App';
import MainMenu from './MainMenu';
import Projects from './Projects';
import SDVX from './SDVX';
import IIDX from './IIDX';
import NotFound from './NotFound';
import AboutMe from './AboutMe';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

//render(() => <App />, root!);

render(
  () => (
    <HashRouter>
      <Route path="/" component={App}/>
      <Route path="MainMenu" component={MainMenu}/>
      <Route path="Projects" component={Projects}/>
      <Route path="/Projects/SDVX" component={SDVX}/>
      <Route path="/Projects/IIDX" component={IIDX}/>
      <Route path="*paramName" component={NotFound} />
      <Route path="AboutMe" component={AboutMe}/>
    </HashRouter>
  ),
  root!
);
