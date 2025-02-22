import {useContext} from 'react'
import {THEME_DARK, THEME_LIGHT, ThemeContextProvider, ThemeContext} from "../theme/Theme.context.jsx";

 export const Button = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const changeTheme = () => {
        setTheme(theme === THEME_DARK ? THEME_LIGHT : THEME_DARK);
    }
    return (
        <>
            <ThemeContextProvider value={theme}>
                <button className={`btn-${theme}`} onClick={changeTheme}>{theme}</button>
            </ThemeContextProvider>
        </>
    )
}
export default Button
