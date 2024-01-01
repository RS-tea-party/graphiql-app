import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import PrivateRoute from '../pages/PrivateRoute/PrivateRoute';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import WrapperWithStore from './helpers/WrapperWithStore';
import { store } from '../store/store';
import { login, logout } from '../store/slices/userSlice';

const memoryRouter = createMemoryRouter(
  [
    {
      path: '/',
      element: <div data-testid="index-page"></div>,
    },
    {
      path: '/private-page',
      element: <PrivateRoute redirectPath="/" />,
      children: [
        {
          index: true,
          element: <div data-testid="private-page"></div>,
        },
      ],
    },
  ],
  { initialEntries: ['/private-page'] }
);

describe('PrivateRoute component', () => {
  it('provide access to private route when login', async () => {
    store.dispatch(login());
    render(
      <WrapperWithStore>
        <RouterProvider router={memoryRouter} />
      </WrapperWithStore>
    );
    expect(screen.getByTestId('private-page')).toBeInTheDocument();
  });

  it('forbid access to private route when logout', async () => {
    store.dispatch(logout());
    render(
      <WrapperWithStore>
        <RouterProvider router={memoryRouter} />
      </WrapperWithStore>
    );
    expect(screen.getByTestId('index-page')).toBeInTheDocument();
  });
});
