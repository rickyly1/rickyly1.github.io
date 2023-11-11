import React, { useState } from "react";
import './Header.css';
import './globalStyles.css';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <div>
                <h1 className={showMenu ? 'hidden' : ''}>R.LY</h1>
            </div>

            <button onClick={toggleMenu} className="hamburger">&#9776;</button>
            <nav className={showMenu ? 'show' : ''}>
                <ul>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;