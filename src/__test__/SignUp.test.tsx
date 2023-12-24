import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';
import SignUp from '../components/Forms/SignUp';

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

  describe('with invalid value', () => {
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
        const emailInput = screen.getByPlaceholderText('********');
        fireEvent.change(emailInput, { target: { value: '123q@' } });
        fireEvent.click(screen.getByRole('button', { name: 'Регистрация' }));
      });
      expect(
        screen.getByText('Должно быть минимум 8 символов')
      ).toBeInTheDocument();
    });
  });
});
