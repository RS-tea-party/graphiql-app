import MemoryRouterProvider from './helpers/MemoryRouterProvider';
import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';

describe('SignIn component', () => {
  it('successful login and riderect to main page', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/auth']} />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );

    await waitFor(() => {
      expect(screen.getByTestId('auth-page')).toBeInTheDocument();
    });

    const emailSignIn = screen.getByTestId('email-signIn');
    const passwordSignIn = screen.getByTestId('password-signIn');
    const buttonSignIn = screen.getByTestId('button-signIn');

    expect(emailSignIn).toBeInTheDocument();
    expect(passwordSignIn).toBeInTheDocument();
    expect(buttonSignIn).toBeInTheDocument();
  });
});
