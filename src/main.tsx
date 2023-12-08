import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout/Layout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
