import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';
import SignUp from '../components/Forms/SignUp';
import MemoryRouterProvider from './helpers/MemoryRouterProvider';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { store } from '../store/store';
import { regPath } from '../store/slices/authPathSlice';

describe('SignUp component', () => {
  it('renders correctly', () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <SignUp />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    expect(
      screen.getByRole('heading', { name: /Ваше имя/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Регистрация' })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Имя')).toBeInTheDocument();
  });

  it('renders the name validation error', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <SignUp />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    await waitFor(() => {
      const nameInput = screen.getByPlaceholderText('Имя');
      fireEvent.change(nameInput, { target: { value: '' } });
      fireEvent.click(screen.getByRole('button', { name: 'Регистрация' }));
    });
    expect(
      screen.getAllByText('Это поле обязательно к заполнению')[0]
    ).toBeInTheDocument();
  });
  it('renders the email validation error', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <SignUp />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    await waitFor(() => {
      const emailInput = screen.getByPlaceholderText('name@mail.com');
      fireEvent.change(emailInput, { target: { value: 'invalid email' } });
      fireEvent.click(screen.getByRole('button', { name: 'Регистрация' }));
    });
    expect(
      screen.getByText('Email не является допустимым')
    ).toBeInTheDocument();
  });
  it('renders the password validation error', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <SignUp />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    await waitFor(() => {
      const passwordInput = screen.getByPlaceholderText('********');
      fireEvent.change(passwordInput, { target: { value: '123q@' } });
      fireEvent.click(screen.getByRole('button', { name: 'Регистрация' }));
    });
    expect(
      screen.getByText('Должно быть минимум 8 символов')
    ).toBeInTheDocument();
  });

  const userCredentialMock = {
    user: {
      sendEmailVerification: vi.fn(),
    },
  };
  //const mockGetAuth = vi.fn()

  vi.mock('firebase/auth', () => {
    //     const firebasemock = require('firebase')
    //     const firebase = firebasemock.initializeApp()
    // const firebaseAuth = firebase.auth()
    return {
      //auth: vi.fn().mockReturnThis(),
      createUserWithEmailAndPassword: vi.fn(() => userCredentialMock),
      getAuth: () => vi.fn(),
      // firebase,
      // firebasemock
    };
  });

  afterAll(() => {
    vi.resetAllMocks();
  });

  it('should pass sign up', async () => {
    store.dispatch(regPath());
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <MemoryRouterProvider initialEntries={['/auth']} />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );

    //screen.debug();
    const email = 'name@mail.com';
    const password = '123!@#qwe';
    await waitFor(() => {
      const nameInput = screen.getByPlaceholderText('Имя');
      fireEvent.change(nameInput, { target: { value: 'RS' } });
      const emailInput = screen.getByPlaceholderText('name@mail.com');
      fireEvent.change(emailInput, { target: { value: email } });
      const passwordInput = screen.getByPlaceholderText('********');
      fireEvent.change(passwordInput, { target: { value: password } });
      fireEvent.click(
        screen.getAllByRole('button', { name: 'Регистрация' })[1]
      );
    });

    expect(createUserWithEmailAndPassword).toBeCalledWith(
      undefined,
      email,
      password
    );
    //expect(userCredentialMock.user?.sendEmailVerification).toBeCalled();
  });
});
