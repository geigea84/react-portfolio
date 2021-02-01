import React from 'react';
import './style.css';
//add bootstrap for layout
import { Container, Row, Col } from 'react-bootstrap';

function Resume() {
    return (
        <div>
            <h3 className="resume-title">My resume</h3>
            <div className="resume-download">
                <a href="../../documents/resume.txt" download="aarongeigerresume">
                    Download Resume
                </a>
            </div>
            <Row>
                <Col>
                    <div>
                        <h4 className="tech-title">Front End Skills</h4>
                        <ul className="skill-list">
                            <li>
                                add front end skills here
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h4 className="tech-title">Back End Skills</h4>
                        <ul className="skill-list">
                            <li>
                                add back end skills here
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Resume;