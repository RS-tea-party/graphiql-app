export type Lang = 'en' | 'ru';

export type ComponentList =
  | 'notFound'
  | 'welcome'
  | 'langSwitcher'
  | 'headerButton'
  | 'graphiQL'
  | 'forms';


export type Locales = {
  [lang in Lang]: {
    [component in ComponentList]: {
      [element: string]: string;
    };
  };
};

export interface PrivateRouteProps {
  redirectPath: string;
}

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignInFormReg {
  name: string;
  email: string;
  password: string;
}
