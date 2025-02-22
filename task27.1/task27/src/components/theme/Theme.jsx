import {useState} from "react";
import {ThemeContextProvider} from "./Theme.context.jsx";
export const Theme = ({children}) =>{
    const [theme, setTheme] = useState('light');
    return(
        <ThemeContextProvider value={[theme, setTheme]}>
            {children}
        </ThemeContextProvider>
    )
}

