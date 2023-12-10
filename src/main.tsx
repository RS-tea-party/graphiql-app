import { ThemeProvider } from '@material-tailwind/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './global.css';
import Layout from './layouts/Layout/Layout';
import Auth from './pages/Auth/Auth';
import GraphiQL from './pages/GraphiQL/GraphiQL';
import NotFound from './pages/NotFound/NotFound';
import Welcome from './pages/Welcome/Welcome';
import { store } from './store/store';
import App from './components/App/App';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Welcome />,
          },
          {
            path: '/auth',
            element: <Auth />,
          },
          {
            path: '/graphiql',
            element: <PrivateRoute redirectPath={'/'} />,
            children: [
              {
                index: true,
                element: <GraphiQL />,
              },
            ],
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
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
