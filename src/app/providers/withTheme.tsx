import { ComponentType, createContext } from 'react';

import DefaultBrand from '@snack-uikit/figma-tokens-nachos/build/css/brand.module.css';
import { useThemeConfig } from '@snack-uikit/utils';

export enum Theme {
  Light = 'Light',
  Dark = 'Dark',
}

const themeMap = {
  [Theme.Light]: DefaultBrand.light,
  [Theme.Dark]: DefaultBrand.dark,
};

type ThemeContextProps = {
  theme: Theme;
  changeTheme(value: Theme): void;
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.Light,
  changeTheme() {},
});

// TODO: нужен ли вообще тогда он
export function withTheme(Component: ComponentType) {
  return function WithTheme() {
    const { theme, themeClassName, changeTheme } = useThemeConfig<Theme>({
      themeMap,
      defaultTheme: Theme.Light,
    });

    // также можно повесить класс на body
    // useEffect(() => {
    //   document.body.classList.add(themeClassName);
    //   return () => document.body.classList.remove(themeClassName);
    // }, [theme]);

    return (
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div className={themeClassName}>
          <Component />
        </div>
      </ThemeContext.Provider>
    );
  };
}
