import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
//import './App.css';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <main>
                <Project></Project>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;