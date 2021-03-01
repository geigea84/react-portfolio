import React from 'react';
import './style.css';
//add bootstrap for layout
import { Container, Row, Col } from 'react-bootstrap';

//dynamically generate projects, break them down from props
function Project() {
    return (
        <Container>
            <Row>
                <Col className="team-projects">
                    <h3 className="project-title">Team Projects</h3>
                    <Row>
                        <Col>
                            <div className="tt-rulers-container container">
                                <p className="link-text">click image to view site</p>
                                <div className="tt-rulers project">
                                    <div>
                                        <a
                                            href="https://cgsdesign.github.io/table-top-resource/index.html"
                                            alt="Table Top Rulers link"
                                            className="link"
                                        > </a>
                                    </div>
                                    <div>
                                        <h4 className="white-back">Table Top Rulers</h4>
                                    </div>
                                </div>
                                <div className="repository">
                                    <a
                                        href="https://github.com/cgsdesign/table-top-resource"
                                        alt="Table Top Rulers GitHub"
                                    >
                                        GitHub Repository
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="ht-help-container container">
                                <p className="link-text">click image to view site</p>
                                <div className="ht-help project">
                                    <div>
                                        <a
                                            href="https://how-to-dot-help.herokuapp.com"
                                            alt="How to Help link"
                                            className="link"
                                        > </a>
                                    </div>
                                    <div>
                                        <h4 className="white-back">How to Help</h4>
                                    </div>
                                </div>
                                <div className="repository">
                                    <a
                                        href="https://github.com/geigea84/how-to-dot-help"
                                        alt="How to Help GitHub"
                                    >
                                        GitHub Repository
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="house-it-container container">
                                <p className="link-text">click image to view site</p>
                                <div className="house-it project">
                                    <div>
                                        <a
                                            href="https://house-it.herokuapp.com/"
                                            alt="House-It link"
                                            className="link"
                                        > </a>
                                    </div>
                                    <div>
                                        <h4 className="white-back">House-It</h4>
                                    </div>
                                </div>
                                <div className="repository">
                                    <a
                                        href="https://github.com/chriswein12/house-it"
                                        alt="House-It GitHub"
                                    >
                                        GitHub Repository
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="solo-projects">
                    <h3 className="project-title">Solo Projects</h3>
                    <Row>
                        <Col>
                            <div className="horiseon-container container">
                                <p className="link-text">click image to view site</p>
                                <div className="horiseon project">
                                    <div>
                                        <a
                                            href="https://geigea84.github.io/Horiseon"
                                            alt="Horiseon link"
                                            className="link"
                                        > </a>
                                    </div>
                                    <div>
                                        <h4 className="white-back">Horiseon</h4>
                                    </div>
                                </div>
                                <div className="repository">
                                    <a
                                        href="https://github.com/geigea84/Horiseon"
                                        alt="Horiseon GitHub"
                                    >
                                        GitHub Repository
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="pg-container container">
                                <p className="link-text">click image to view site</p>
                                <div className="password-generator project">
                                    <div>
                                        <a
                                            href="https://geigea84.github.io/Password-Generator/"
                                            alt="Password Generator link"
                                            className="link"
                                        > </a>
                                    </div>
                                    <div>
                                        <h4 className="white-back">Password Generator</h4>
                                    </div>
                                </div>
                                <div className="repository">
                                    <a
                                        href="https://github.com/geigea84/Password-Generator"
                                        alt="Password Generator GitHub"
                                    >
                                        GitHub Repository
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="rb-container container">
                                <p className="link-text">click image to view site</p>
                                <div className="run-buddy project">
                                    <div>
                                        <a
                                            href="https://geigea84.github.io/run-buddy"
                                            alt="Run Buddy link"
                                            className="link"
                                        > </a>
                                    </div>
                                    <div>
                                        <h4 className="white-back">Run Buddy</h4>
                                    </div>
                                </div>
                                <div className="repository">
                                    <a
                                        href="https://github.com/geigea84/run-buddy"
                                        alt="Run Buddy GitHub"
                                    >
                                        GitHub Repository
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="scheduler-container container">
                                <p className="link-text">click image to view site</p>
                                <div className="scheduler project">
                                    <div>
                                        <a
                                            href="https://geigea84.github.io/work-day-scheduler/"
                                            alt="Work Day Scheduler link"
                                            className="link"
                                        > </a>
                                    </div>
                                    <div>
                                        <h4 className="white-back">Work Day Scheduler</h4>
                                    </div>
                                </div>
                                <div className="repository">
                                    <a
                                        href="https://github.com/geigea84/work-day-scheduler"
                                        alt="Work Day Scheduler GitHub"
                                    >
                                        GitHub Repository
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Project;