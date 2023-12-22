import { ThemeProvider } from '@material-tailwind/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './global.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Layout from './layouts/Layout/Layout';
import Auth from './pages/Auth/Auth';
import GraphiQL from './pages/GraphiQL/GraphiQL';
import NotFound from './pages/NotFound/NotFound';
import Welcome from './pages/Welcome/Welcome';
import { store } from './store/store';
import App from './components/App/App';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import { Paths } from './dto/constants';
import './helpers/firebase';

const router = createBrowserRouter([
  {
    path: Paths.WELCOME,
    element: <App />,
    children: [
      {
        path: Paths.WELCOME,
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Welcome />,
          },
          {
            path: Paths.AUTH,
            element: <Auth />,
          },
          {
            path: Paths.MAIN,
            element: <PrivateRoute redirectPath={Paths.WELCOME} />,
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
          <ToastContainer />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
