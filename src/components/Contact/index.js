import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'
import './style.css';
//add bootstrap for layout?
//import { Container, Row, Col } from 'react-bootstrap';

//review 20.4.3, 20.4.4, 20.4.6

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if(!isValid) {
                setErrorMessage('Your email is invalid');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            }
            else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    //The htmlFor property sets or returns the value of the for attribute of a label. 
    //The for attribute specifies which form element a label is bound to.
    return (
        <div>
            <h3 className="contact-title">Contact me</h3>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="contact-inputs">
                    <label htmlFor="name">name:</label>
                    <input 
                        type="text" 
                        defaultValue={name} 
                        onBlur={handleChange}
                        name="name"
                    />
                </div>
                <div className="contact-inputs">
                    <label htmlFor="email">email:</label>
                    <input 
                        type="email" 
                        defaultValue={email}
                        onBlur={handleChange}
                        name="email"
                    />
                </div>
                <div className="contact-inputs">
                    <label htmlFor="message">message:</label>
                    <textarea 
                        name="message"
                        defaultValue={message}
                        onBlur={handleChange}
                        rows="5"
                    />
                </div>
                {errorMessage && (
                    <div className="contact-inputs">
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div className="contact-inputs">
                    <button id="contact-btn" type="submit">submit</button>
                </div>
            </form>
        </div>
    )
};

export default Contact;