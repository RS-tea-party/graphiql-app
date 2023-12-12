export type Lang = 'en' | 'ru';

export type ComponentList =
  | 'notFound'
  | 'welcome'
  | 'langSwitcher'
  | 'headerButton';

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
