import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout/Layout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider } from '@material-tailwind/react';

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
      <Provider store={store}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
