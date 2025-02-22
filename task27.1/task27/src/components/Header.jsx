import {NavLink} from "react-router";
import {Button} from './BtnGroup/Button.jsx'
import {ThemeContext} from "./theme/Theme.context.jsx";
import {useContext} from "react";

const Header = () => {
    const [theme] = useContext(ThemeContext);
    return (
        <>
            <header className={`header header-${theme}`}>
                <NavLink to="/" className="header">Home</NavLink>
                <NavLink to="/contact" className="header">Contact us</NavLink>
                <NavLink to="/about" className="header">About us</NavLink>
               <Button/>
            </header>
        </>
    );
};

export default Header;
