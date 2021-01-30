import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
//import './App.css';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <main>
                <Project></Project>
                <About></About>
                <Contact></Contact>
                <Resume></Resume>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;