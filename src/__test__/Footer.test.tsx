import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';
import Footer from '../components/Footer/Footer';

describe('Footer', () => {
  it('renders correctly', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <Footer />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    await waitFor(() => {
      const linkToRSSchool = screen.getAllByRole('link')[3];
      const imgGitInga = screen.getAllByRole('img')[2];
      expect(linkToRSSchool).toHaveAttribute(
        'href',
        'https://rs.school/react/'
      );
      expect(imgGitInga).toHaveAttribute('alt', 'Inga github');
      expect(screen.getByText(/2024/i)).toBeInTheDocument();
    });
  });
});
