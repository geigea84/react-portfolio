import React from 'react';
import './style.css';

//will have to decide how to address the list item connections,
//most likely treat it like the project contact page

//conditional rendering e.target.value?

function Nav(props) {
    //destructuring props passed in from App
    const {
        pages = [],
        currentPage,
        setCurrentPage
    } = props;

    return (
        <div className="nav-list-wrapper">
            <ul className="nav-list">
                {/* map over page names */}
                {pages.map((Page) => (
                <li
                    className={currentPage.name}
                    key={Page.name}
                >
                    <span
                        onClick={() => setCurrentPage(Page)}
                    >
                        {Page.name}
                    </span>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Nav;