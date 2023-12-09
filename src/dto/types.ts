export type Lang = 'en' | 'ru';

export type ComponentList = 'notFound' | 'welcome' | 'langSwitcher';

export type Locales = {
  [lang in Lang]: {
    [component in ComponentList]: {
      [element: string]: string;
    };
  };
};
