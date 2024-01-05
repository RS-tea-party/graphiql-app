import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';
import MemoryRouterProvider from './helpers/MemoryRouterProvider';
import mediaQuery from 'css-mediaquery';

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
      expect(screen.getAllByRole('navigation')[0].style.position === 'sticky');
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
