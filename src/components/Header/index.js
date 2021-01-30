import React from 'react';
import Nav from '../Nav';
import './style.css';

function Header() {
    return (
        <header className="header">
            <div className="title-text">
                <h1>Aaron Geiger</h1>
                <h2>Full-Stack Developer</h2>
            </div>
            <Nav></Nav>
        </header>
    )
}

export default Header;