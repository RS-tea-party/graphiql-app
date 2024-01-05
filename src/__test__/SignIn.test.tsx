import MemoryRouterProvider from './helpers/MemoryRouterProvider';
import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  //waitForElementToBeRemoved,
} from '@testing-library/react';
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

    fireEvent.change(emailSignIn, { target: { value: 'test@domain.com' } });
    fireEvent.change(passwordSignIn, { target: { value: '12345Qw$' } });
    fireEvent.click(buttonSignIn);

    // await waitForElementToBeRemoved(screen.getByTestId('auth-page'));
    // await waitFor(() => {
    //   expect(screen.getByTestId('graphql-page')).toBeInTheDocument();
    // });
  });
});
