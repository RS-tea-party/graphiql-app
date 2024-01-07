import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';
import MemoryRouterProvider from './helpers/MemoryRouterProvider';
import About from '../components/About/About';
import { store } from '../store/store';
import { login, logout } from '../store/slices/userSlice';

describe('Welcome Page', () => {
  it('renders sign-in, sign-up without auth', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/']}>
            <About />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    await waitFor(() => {
      expect(screen.getByTestId('about-sign-in-btn')).toBeInTheDocument();
      expect(screen.getByTestId('about-sign-up-btn')).toBeInTheDocument();
    });
  });

  it('renders main button with auth', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/']}>
            <About />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    await waitFor(() => {
      store.dispatch(login());
      expect(screen.getByTestId('about-main-btn')).toBeInTheDocument();
    });
  });

  it('renders sign-in, sign-up without auth', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/']}>
            <About />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    store.dispatch(logout());
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('about-sign-in-btn'));
      expect(store.getState().authPath.isLoginPath).toBe(true);
    });
  });

  it('clicking sign-in changes auth path', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/']}>
            <About />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    store.dispatch(logout());
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('about-sign-in-btn'));
      expect(store.getState().authPath.isLoginPath).toBe(true);
    });
  });

  it('clicking sign-up changes auth path', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/']}>
            <About />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    store.dispatch(logout());
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('about-sign-up-btn'));
      expect(store.getState().authPath.isLoginPath).toBe(false);
    });
  });
});
