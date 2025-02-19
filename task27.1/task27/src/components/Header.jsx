import {NavLink} from "react-router";
import {useContext} from "react";
import {ThemeContext} from "./theme/Theme.jsx";

const Header = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    console.log('theme', theme);
    return (
        <>
            <header className={`header header-${theme}`}>
                <NavLink to="/" className="header">Home</NavLink>
                <NavLink to="/contact" className="header">Contact us</NavLink>
                <NavLink to="/about" className="header">About us</NavLink>
                <button className={`btn-${theme}`} onClick={changeTheme}>{theme}</button>
            </header>
        </>
    );
};

export default Header;
