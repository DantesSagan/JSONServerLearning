import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loader from './Components/fallback/loader';
import NavBar from './Components/Pages/MainPage/NavBar';

import * as ROUTES from './Components/routes/routes';

const Main = lazy(() => import('./Components/Pages/MainPage/Main'));
const GetRequest = lazy(() =>
  import('./Components/JSON/JSONGetRequest.pageOne')
);
const Filtering = lazy(() => import('./Components/JSON/JSONFiltering.PageTwo'));
const Sorting = lazy(() => import('./Components/JSON/JSONSorting.PageThree'));
const Pagination = lazy(() =>
  import('./Components/JSON/JSONPagination.PageFour')
);
const Operators = lazy(() =>
  import('./Components/JSON/JSONOperators.PageFive')
);
const FullTextSearch = lazy(() =>
  import('./Components/JSON/JSONFullTextSearch.PageSix')
);
const Relationships = lazy(() =>
  import('./Components/JSON/JSONRelationships.PageSeven')
);
const PostRequest = lazy(() =>
  import('./Components/JSON/JSONPostRequest.PageEight')
);
const PutPostDeleteRQ = lazy(() =>
  import('./Components/JSON/JSONPutPostDeleteRQ.PageNine')
);
const Configurations = lazy(() =>
  import('./Components/JSON/JSONConfigurations.PageTen')
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
          {/* GetRequest */}
          <Route path={ROUTES.JSON} element={<GetRequest />} />
          {/* Filtering */}
          <Route path={ROUTES.Filtering} element={<Filtering />} />
          {/* Sorting */}
          <Route path={ROUTES.Sorting} element={<Sorting />} />
          {/* Pagination */}
          <Route path={ROUTES.Pagination} element={<Pagination />} />
          {/* Operators */}
          <Route path={ROUTES.Operators} element={<Operators />} />
          {/* FullTextSearch */}
          <Route path={ROUTES.FullTextSearch} element={<FullTextSearch />} />
          {/* Relationships */}
          <Route path={ROUTES.Relationships} element={<Relationships />} />
          {/* PostRequest */}
          <Route path={ROUTES.PostRequest} element={<PostRequest />} />
          {/* PutPostDeleteRQ */}
          <Route
            path={ROUTES.PutPatchDeleteRequest}
            element={<PutPostDeleteRQ />}
          />
          {/* Configurations */}
          <Route path={ROUTES.Configurations} element={<Configurations />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
