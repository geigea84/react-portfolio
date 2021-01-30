import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

function Project() {
    return (
        <Container>
            <Row>
                <Col className="team-projects">
                    <h3 className="project-title">Team Projects</h3>
                    <div className="tt-rulers">
                        <div>
                            <a 
                                href="https://cgsdesign.github.io/table-top-resource/index.html"
                                alt="Table Top Rulers link"
                                className="link"
                            ></a>
                        </div>
                        <div>
                            <h4>Table Top Rulers</h4>
                        </div>
                    </div>
                    <div className="ht-help">
                        <div>
                            <a 
                                href="https://how-to-dot-help.herokuapp.com"
                                alt="How to Help link"
                                className="link"
                            ></a>
                        </div>
                        <div>
                            <h4>How to Help</h4>
                        </div>
                    </div>
                </Col>
                <Col className="solo-projects">
                    <h3 className="project-title">Solo Projects</h3>
                    <div className="horiseon">
                        <div>
                            <a
                                href="https://geigea84.github.io/Horiseon"
                                alt="Horiseon link"
                                className="link"
                            ></a>
                        </div>
                        <div>
                            <h4>Horiseon</h4>
                        </div>
                    </div>
                    <div className="run-buddy">
                        <div>
                            <a
                                href="https://geigea84.github.io/run-buddy"
                                alt="Run Buddy link"
                                className="link"
                            ></a>
                        </div>
                        <div>
                            <h4>Run Buddy</h4>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Project;