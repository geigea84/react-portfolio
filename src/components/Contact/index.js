import React, { useState } from 'react';
import './style.css';
//add bootstrap for layout
//import { Container, Row, Col } from 'react-bootstrap';


function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    return (
        <div>
            <h3 className="contact-title">Contact me</h3>
            <form id="contact-form" onSubmit={handleSubmit}>

            </form>
        </div>
    )
};

export default Contact;