import React from 'react';
import './style.css';

//will have to decide how to address the list item connections,
//most likely treat it like the project contact page

function Nav() {
    return (
        <div className="nav-list-wrapper">
            <ul className="nav-list">
                <li>
                    <p>My projects</p>
                </li>
                <li>
                    <p>About me</p>
                </li>
                <li>
                    <p>Contact me</p>
                </li>
            </ul>
        </div>
    );
}

export default Nav;