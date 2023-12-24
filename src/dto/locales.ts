import { Locales } from './types';

export const localesObj: Locales = {
  ru: {
    notFound: {
      h1: 'Страница не найдена',
      button: 'На главную',
    },
    welcome: {
      greeting: 'Добро пожаловать',
    },
    langSwitcher: {
      menuTitle: 'Язык',
    },
    headerButton: {
      mainPage: 'Главная страница',
      logOut: 'Выйти',
      signIn: 'Войти',
      signUp: 'Регистрация',
    },
    forms: {
      signInText: 'Внесите Ваши данные, чтобы войти.',
      signUpText: 'Внесите Ваши данные для регистрации.',
      name: 'Ваше имя',
      namePlaceholder: 'Имя',
      email: 'Ваш адрес электронной почты',
      password: 'Пароль',
      notAccount: 'Не удается войти?',
      please: 'Пожалуйста,',
      pleaseSignUp: 'зарегистрируйтесь!',
      hasAccount: 'Уже есть аккаунт?',
      justSignIn: 'Просто войдите!',
      requiredError: 'Это поле обязательно к заполнению',
      emailError: 'Email не является допустимым',
      passwordErrorCount: 'Должно быть минимум 8 символов',
      passwordErrorLetter: 'Должна быть минимум одна буква',
      passwordErrorDigit: 'Должна быть минимум одна цифра',
      passwordErrorChar: 'Должен быть минимум один специальный символ',
      success: 'Вы вошли в аккаунт',
      firebaseErrorEmail:
        'Адрес электронной почты уже используется существующим пользователем',
      firebaseErrorInternal: 'Обнаружена непредвиденная ошибка',
      firebaseErrorInvalidCredential:
        'Неверный адрес электронной почты или пароль',
      firebaseErrorMany: 'Количество запросов превышает максимально допустимое',
    },
    graphiQL: {
      change: 'Изменить',
      apply: 'Применить',
      docs: 'Документация',
      send: 'Отправить',
      prettify: 'Преттифай',
      headers: 'Заголовки',
      variables: 'Переменные',
    },
  },
  en: {
    notFound: {
      h1: 'Page not found',
      button: 'To main page',
    },
    welcome: {
      greeting: 'Welcome',
    },
    langSwitcher: {
      menuTitle: 'Language',
    },
    headerButton: {
      mainPage: 'Main Page',
      logOut: 'Log out',
      signIn: 'Sign In',
      signUp: 'Sign Up',
    },
    forms: {
      signInText: 'Enter your details to login.',
      signUpText: 'Enter your details to register.',
      name: 'Your name',
      namePlaceholder: 'Name',
      email: 'Your Email',
      password: 'Password',
      notAccount: "Don't have an account?",
      please: 'Please',
      pleaseSignUp: 'Sign up!',
      hasAccount: 'Already have an account?',
      justSignIn: 'Just Sign in!',
      requiredError: 'This field is required',
      emailError: 'Email is not valid',
      passwordErrorCount: 'Must be minimum 8 symbols',
      passwordErrorLetter: 'Must be at least one letter',
      passwordErrorDigit: 'Must be at least one digit',
      passwordErrorChar: 'Must be at least one special character',
      success: 'Success sign in',
      firebaseErrorEmail: 'Email already exists',
      firebaseErrorInternal: 'Encountered an unexpected error',
      firebaseErrorInvalidCredential: 'Invalid email address or password',
      firebaseErrorMany: 'Too many requests',
    },
    graphiQL: {
      change: 'Change',
      apply: 'Apply',
      docs: 'Documentation',
      send: 'Send',
      prettify: 'Prettify',
      headers: 'Headers',
      variables: 'Variables',
    },
  },
};
