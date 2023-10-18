import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Main, PageNotFound } from '../pages';

import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
