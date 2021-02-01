import React from 'react';
import './style.css'

function About() {
    return (
        <div>
            <div className="about">
                <h3 className="about-title">About me</h3>
                <p className="about-text">
                    I'm a full-stack developer student in the University of Wisconsin's MERN Stack Coding Certificate
                    Program. When I'm not coding or studying, you'll find me in the gym or trying my hand at being a
                    guitarist. This portfolio is a brief representation of my current work.
                </p>
            </div>
            <div className="headshot">
                <img
                    src={require("../../images/headshot.png").default}
                    alt="my headshot"
                ></img>
            </div>
        </div>
    )
}

export default About;