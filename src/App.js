import { BrowserRouter, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Switch from 'react-router';

import ROUTES from './Components/routes/routes';

import './App.css';
const NavBar = lazy(() => import('./Components/Pages/MainPage/NavBar'));
const Main = lazy(() => import('./Components/Pages/MainPage/Main'));

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense>
        <Switch>
          <Route path={ROUTES.Main} component={Main} />
          <Route />
          <Route />
          <Route />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
