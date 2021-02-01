import React, { useState } from 'react';
import About from '../About';
import Project from '../Project';
import Contact from '../Contact';
import Resume from '../Resume';
import PageContent from '../PageContent'

//pass in currentPage from App
function Page({ currentPage }) {
    //switch statement to provide clicked page to conditionally render
    function renderPage() {
        //pass in page names from App
        switch (currentPage.name) {
            case 'about me':
                return <About></About>;
            case 'my projects':
                return <Project></Project>;
            case 'contact me':
                return <Contact></Contact>;
            case 'my resume':
                return <Resume></Resume>;
            default:
                return <About></About>;
        }
    }
    
    return (
        <div>
            {/* render clicked page to PageContent component */}
            <PageContent>{renderPage()}</PageContent>
        </div>
    );
}

export default Page;