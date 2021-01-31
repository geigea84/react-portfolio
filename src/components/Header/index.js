import React from 'react';
import './style.css';

function Header(props) {
    return (
        <header className="header">
            <div className="title-text">
                <h1>Aaron Geiger</h1>
                <h2>Full-Stack Developer</h2>
            </div>
            {props.children}
        </header>
    )
}

export default Header;