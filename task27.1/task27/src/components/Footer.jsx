import {useContext} from "react";
import {ThemeContext} from "./theme/Theme.jsx";

const Footer = () => {
    const [theme] = useContext(ThemeContext);
    console.log('theme', theme);
    return (
        <>
            <footer className={`footer footer-${theme}`}>
                <p className="footer">© Copyright by allhitsugaya</p>
            </footer>
        </>
    );
};

export default Footer;
