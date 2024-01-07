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
import mediaQuery from 'css-mediaquery';

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

  describe('Header', () => {
    it('renders correctly', async () => {
      render(
        <WrapperWithStore>
          <WrapperWithLocaleContext lang="en">
            <MemoryRouterProvider initialEntries={['/auth']} />
          </WrapperWithLocaleContext>
        </WrapperWithStore>
      );
      await waitFor(() => {
        const linkToWelcomePage = screen.getAllByRole('link')[0];
        fireEvent.click(linkToWelcomePage);
        expect(linkToWelcomePage).toBeVisible();
        expect(linkToWelcomePage).toHaveAttribute('href', '/');
        expect(screen.getByTestId('welcome-page')).toBeInTheDocument();
        expect(
          screen.getAllByRole('navigation')[0].style.position === 'sticky'
        );
      });
    });
  });

  function createMatchMedia(width: number) {
    return (query: string) => {
      return {
        matches: mediaQuery.match(query, { width }),
        media: '',
        addListener: () => {},
        removeListener: () => {},
        onchange: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => true,
      };
    };
  }

  function resizeScreenSize(width: number) {
    window.matchMedia = createMatchMedia(width);
  }

  describe('Media Test', () => {
    beforeEach(async () => {
      render(
        <WrapperWithStore>
          <WrapperWithLocaleContext lang="en">
            <MemoryRouterProvider initialEntries={['/']} />
          </WrapperWithLocaleContext>
        </WrapperWithStore>
      );
    });
    it('Desktop Test', async () => {
      await waitFor(() => {
        resizeScreenSize(1000);
        const buttonEl = screen.queryByRole('button', { name: /open menu/i });
        expect(buttonEl?.style.visibility === 'hidden');
      });
    });

    it('Mobile Test', async () => {
      resizeScreenSize(400);
      await waitFor(() => {
        const buttonEl = screen.getByRole('button', { name: /open menu/i });
        expect(buttonEl).toBeVisible();
      });
    });
  });
  it('clicking sign-up changes auth path', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/']} />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('button-signup'));
      expect(store.getState().authPath.isLoginPath).toBe(false);
    });
  });

  it('clicking sign-in changes login path', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/']} />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('button-signin'));
      expect(store.getState().authPath.isLoginPath).toBe(true);
    });
  });

  it('clicking sign-up changes auth path', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/']} />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('button-burger-signup'));
      expect(store.getState().authPath.isLoginPath).toBe(false);
    });
  });

  it('clicking sign-in changes login path', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/']} />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('button-burger-signin'));
      expect(store.getState().authPath.isLoginPath).toBe(true);
    });
  });
});
