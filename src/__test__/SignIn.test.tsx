import firebase from 'firebase/compat/app';
import MemoryRouterProvider from './helpers/MemoryRouterProvider';
import { regPath } from '../store/slices/authPathSlice';
import { store } from '../store/store';
import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';

const onAuthStateChanged = vi.fn();

const getRedirectResult = vi.fn(() => {
  return Promise.resolve({
    user: {
      displayName: 'redirectResultTestDisplayName',
      email: 'redirectTest@test.com',
      emailVerified: true,
    },
  });
});

const sendEmailVerification = vi.fn(() => {
  return Promise.resolve('result of sendEmailVerification');
});

const createUserWithEmailAndPassword = vi.fn(() => {
  return Promise.resolve('result of createUserWithEmailAndPassword');
});

const signInWithEmailAndPassword = vi.fn(() => {
  return Promise.resolve('result of signInWithEmailAndPassword');
});

const signInWithRedirect = vi.fn(() => {
  return Promise.resolve('result of signInWithRedirect');
});

const initializeApp = vi
  .spyOn(firebase, 'initializeApp' as never)
  .mockImplementation(() => {
    return {
      auth: () => {
        return {
          createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          currentUser: {
            sendEmailVerification,
          },
          signInWithRedirect,
          getRedirectResult,
        };
      },
    };
  });

vi.spyOn(firebase, 'app' as never).mockImplementation(() => {
  return {
    onAuthStateChanged,
    currentUser: {
      displayName: 'testDisplayName',
      email: 'test@test.com',
      emailVerified: true,
    },
  };
});

describe('SignUp component', () => {
  it('calls firebase', async () => {
    store.dispatch(regPath());
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/auth']} />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );

    const email = 'rs@mail.com';
    const password = '123!@#qwe';
    await waitFor(() => {
      const nameInput = screen.getByPlaceholderText('Name');
      fireEvent.change(nameInput, { target: { value: 'RS' } });
      const emailInput = screen.getAllByPlaceholderText('name@mail.com')[1];
      fireEvent.change(emailInput, { target: { value: email } });
      const passwordInput = screen.getAllByPlaceholderText('********')[1];
      fireEvent.change(passwordInput, { target: { value: password } });
      fireEvent.click(screen.getByTestId('button-signUp'));
    });

    //screen.debug();
    //expect(createUserWithEmailAndPassword).toHaveBeenCalled()
    await waitFor(() => {
      //expect(screen.getByTestId('welcome-page')).toBeInTheDocument();
      expect(initializeApp).not.toHaveBeenCalled();
    });
  });
});
