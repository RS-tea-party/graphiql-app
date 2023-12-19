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

export interface PrivateRouteProps {
  redirectPath: string;
}
