import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it } from 'vitest';
import Header from '../components/Header/Header';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';
import MemoryRouterProvider from './helpers/MemoryRouterProvider';
import { store } from '../store/store';
import { login } from '../store/slices/userSlice';
import HeaderButtons from '../components/Header/HeaderButtons';
import LangSwitcher from '../components/Header/LangSwitcher';
import HeaderBurgerButtons from '../components/Header/HeaderBurgerButtons';
import WelcomeBurgerButton from '../components/Header/WelcomeBurgerButton';
import WelcomeButton from '../components/Header/WelcomeButton';

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

  it('should be able to change the language by clicking on the toggler/select', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <MemoryRouterProvider initialEntries={['/']}>
            <Header />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    const langSwitchButton = screen.getAllByTestId('lang-switch-button')[0];
    expect(langSwitchButton).toBeInTheDocument();

    fireEvent.click(langSwitchButton);
    const langSwitchToEn = screen.getAllByTestId('switch-to-en')[0];
    const langSwitchToRu = screen.getAllByTestId('switch-to-ru')[0];
    await waitFor(() => {
      expect(langSwitchToEn).toBeInTheDocument();
      expect(langSwitchToRu).toBeInTheDocument();
    });

    fireEvent.click(langSwitchToEn);
    await waitFor(() => {
      expect(langSwitchButton).toHaveTextContent('Language');
    });

    fireEvent.click(langSwitchToRu);
    await waitFor(() => {
      expect(langSwitchButton).toHaveTextContent('Язык');
    });
  });
});

describe('HeaderBurgerButtons', () => {
  it('renders correctly', () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <MemoryRouterProvider initialEntries={['/']}>
            <HeaderBurgerButtons />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    expect(screen.getByTestId('header-burger-buttons')).toBeInTheDocument();
  });
});

describe('HeaderButtons', () => {
  it('renders correctly', () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <MemoryRouterProvider initialEntries={['/']}>
            <HeaderButtons />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    expect(screen.getByTestId('header-buttons')).toBeInTheDocument();
  });
});

describe('LangSwitcher', () => {
  it('renders correctly', () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <MemoryRouterProvider initialEntries={['/']}>
            <LangSwitcher />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    expect(screen.getByTestId('lang-switcher')).toBeInTheDocument();
  });
});

describe('WelcomeBurgerButton', () => {
  it('renders correctly', () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <MemoryRouterProvider initialEntries={['/']}>
            <WelcomeBurgerButton />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    expect(screen.getByTestId('welcome-burger-button')).toBeInTheDocument();
  });
});

describe('WelcomeButton', () => {
  it('renders correctly', () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <MemoryRouterProvider initialEntries={['/']}>
            <WelcomeButton />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    expect(screen.getByTestId('welcome-button')).toBeInTheDocument();
  });
});