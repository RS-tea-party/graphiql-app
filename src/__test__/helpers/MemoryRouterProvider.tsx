import type { FC } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import App from '../../components/App/App';
import { Paths } from '../../dto/constants';
import Layout from '../../layouts/Layout/Layout';
import Welcome from '../../pages/Welcome/Welcome';
import Auth from '../../pages/Auth/Auth';
import PrivateRoute from '../../pages/PrivateRoute/PrivateRoute';
import GraphiQL from '../../pages/GraphiQL/GraphiQL';
import NotFound from '../../pages/NotFound/NotFound';

interface MemoryRouterProviderProps {
  initialEntries: string[];
}

const MemoryRouterProvider: FC<MemoryRouterProviderProps> = ({
  initialEntries,
}) => {
  const memoryRouter = createMemoryRouter(
    [
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
    ],
    { initialEntries }
  );

  return <RouterProvider router={memoryRouter} />;
};

export default MemoryRouterProvider;
