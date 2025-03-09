import {NavLink} from "react-router";
import * as React from 'react';
import Button from '@mui/material/Button';
import './header.css'

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <header>
            <Button
                id="basic-button"
                aria-controls={open ? 'grouped-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <NavLink to="/" className="header">My CV</NavLink>
            </Button>
            <Button
                id="basic-button"
                aria-controls={open ? 'grouped-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <NavLink to="/todolist" className="header">TODOLIST</NavLink>
            </Button>
            <Button
                id="basic-button"
                aria-controls={open ? 'grouped-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <NavLink to="/swapi" className="header">SWAPI</NavLink>
            </Button>
        </header>
    );
}
