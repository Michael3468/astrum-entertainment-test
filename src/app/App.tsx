import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Main } from '../pages';

import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '*',
    element: <h1>Page not found</h1>,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
