import React from 'react';
import './style.css';

function Header(props) {
    return (
        <header className="header">
            <div className="title-text">
                <h1>Aaron Geiger</h1>
                <h3>Full-Stack Developer</h3>
            </div>
            {props.children}
        </header>
    )
}

export default Header;