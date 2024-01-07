import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';
import MemoryRouterProvider from './helpers/MemoryRouterProvider';
import { store } from '../store/store';
import { login, logout } from '../store/slices/userSlice';

describe('Welcome Page', () => {
  it('renders correctly', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/']} />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    await waitFor(() => {
      expect(screen.getByTestId('welcome-page')).toBeInTheDocument();
    });
  });
});

describe('404 Page', () => {
  it('renders correctly', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/bad-route']} />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    await waitFor(() => {
      expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
  });
});

describe('GraphQL Page', () => {
  it('renders correctly', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/graphiql']} />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    store.dispatch(login());
    await waitForElementToBeRemoved(screen.getByTestId('loader'));
    await waitFor(() => {
      expect(screen.getByTestId('graphql-page')).toBeInTheDocument();
    });
  });
  it('this route should be private', async () => {
    store.dispatch(logout());
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/graphiql']} />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    await waitFor(() => {
      expect(screen.getByTestId('welcome-page')).toBeInTheDocument();
    });
  });
});
