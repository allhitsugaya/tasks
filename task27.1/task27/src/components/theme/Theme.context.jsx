import {createContext} from "react";

export const THEME_DARK = "dark";
export const THEME_LIGHT = "light";

export const ThemeContext = createContext(
    {theme: THEME_DARK,
        changeTheme: () => {}
    }
);

export const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;