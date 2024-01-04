import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';
import MemoryRouterProvider from './helpers/MemoryRouterProvider';

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
      //expect(screen.getAllByRole('navigation')[0]).toHaveStyle({ position: "sticky" })
    });
  });
});
