import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it } from 'vitest';
import Header from '../components/Header/Header';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';
import MemoryRouterProvider from './helpers/MemoryRouterProvider';
import { store } from '../store/store';
import { login } from '../store/slices/userSlice';

describe('Header component', () => {
  it('renders correctly', () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <MemoryRouterProvider initialEntries={['/']}>
            <Header />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('has control that allows user to switch the language', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <MemoryRouterProvider initialEntries={['/']}>
            <Header />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    expect(screen.getAllByTestId('lang-switcher').length).toBeGreaterThan(0);
  });

  it('has Sign Out button - signs user out', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <MemoryRouterProvider initialEntries={['/']}>
            <Header />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    expect(screen.getByTestId('button-signin')).toBeInTheDocument();
    expect(screen.getByTestId('button-signup')).toBeInTheDocument();

    store.dispatch(login());
    await waitFor(() => {
      expect(screen.getByTestId('button-logout')).toBeInTheDocument();
    });
  });
});
