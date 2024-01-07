import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';
import SignUp from '../components/Forms/SignUp';
import { store } from '../store/store';
import { regPath } from '../store/slices/authPathSlice';
import MemoryRouterProvider from './helpers/MemoryRouterProvider';

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
  it('successful sign up ui communication', async () => {
    store.dispatch(regPath());
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

    const nameSignUp = screen.getByTestId('name-signUp');
    const emailSignUp = screen.getByTestId('email-signUp');
    const passwordSignUp = screen.getByTestId('password-signUp');
    const buttonSignUp = screen.getByTestId('button-signUp');

    expect(nameSignUp).toBeInTheDocument();
    expect(emailSignUp).toBeInTheDocument();
    expect(passwordSignUp).toBeInTheDocument();
    expect(buttonSignUp).toBeInTheDocument();

    fireEvent.change(nameSignUp, { target: { value: 'TestName' } });
    fireEvent.change(emailSignUp, { target: { value: 'test@domain.com' } });
    fireEvent.change(passwordSignUp, { target: { value: '12345Qw$' } });
    fireEvent.click(buttonSignUp);
  });
});
