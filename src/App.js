import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';
import Footer from './components/Footer';
//import './App.css';

function App() {
    const [pages] = useState([
        {name: 'my projects'},
        {name: 'about me'},
        {name: 'contact me'},
        {name: 'my resume'}
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
        <div className="App">
            <Header>
                {/* setting up to pass props to Nav component */}
                <Nav
                    pages={pages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                ></Nav>
            </Header>
            <main>
                <Page currentPage={currentPage}></Page>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;