import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Layout } from './layout/Layout';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Error404 } from './components/Error404/Error404';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


