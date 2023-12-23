export type Lang = 'en' | 'ru';

export type ComponentList =
  | 'notFound'
  | 'welcome'
  | 'langSwitcher'
  | 'headerButton'
  | 'graphiQL'
  | 'forms';

export type SpellingList = {
  [component in ComponentList]: {
    [element: string]: string;
  };
};

export type Locales = {
  [lang in Lang]: SpellingList;
};

export interface PrivateRouteProps {
  redirectPath: string;
}

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  name: string;
  email: string;
  password: string;
}

export interface GetSchemaQueryParams {
  url: string;
}

export interface GetGraphQLDataQueryParams {
  url: string;
  operationName: string | null;
  query: string;
  variables: { [key: string]: string };
}
