export type Lang = 'en' | 'ru';

export type ComponentList =
  | 'notFound'
  | 'welcome'
  | 'langSwitcher'
  | 'headerButton'
  | 'graphiQL';

export type SpellingList = {
  [component in ComponentList]: {
    [element: string]: string;
  };
};

export type Locales = {
  [lang in Lang]: SpellingList;
};

export type zIndexes =
  | 'z-0'
  | 'z-10'
  | 'z-20'
  | 'z-30'
  | 'z-40'
  | 'z-50'
  | 'z-auto';

export interface PrivateRouteProps {
  redirectPath: string;
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
