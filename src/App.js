import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loader from './Components/fallback/loader';
import NavBar from './Components/Pages/MainPage/NavBar';

import * as ROUTES from './Components/routes/routes';

const Main = lazy(() => import('./Components/Pages/MainPage/Main'));
const GetRequest = lazy(() =>
  import('./Components/JSON/JSONGetRequest.pageOne')
);

export default function App() {
  return (
    <BrowserRouter>
      {/* NavBarPage */}
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* MainPage */}
          <Route path={ROUTES.Main} element={<Main animate={true} />} />
          <Route path={ROUTES.JSON} element={<GetRequest />} />
          <Route />
          <Route />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
