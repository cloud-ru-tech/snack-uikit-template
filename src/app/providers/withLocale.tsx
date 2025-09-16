import { ComponentType } from 'react';

import { LocaleProvider } from '@snack-uikit/locale';

export function withLocale(Component: ComponentType) {
  return function WithLocale() {
    return (
      <LocaleProvider lang='ru-RU'>
        <Component />
      </LocaleProvider>
    );
  };
}
