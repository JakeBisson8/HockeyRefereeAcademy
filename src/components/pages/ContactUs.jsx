import React from 'react'
import { useState } from 'react';

import {
    Container,
    Form,
    Button
} from "react-bootstrap";

import {BsCheckCircle} from 'react-icons/bs';

export default function ContactUs() {
    const [formSuccess, setFormSuccess] = useState(false);
    const [showEmailFieldError, setShowEmailFieldError] = useState(false);
    const updateEmailError = (e) => {
        //don't show the error if length is zero
        if (e.target.value.length === 0){
            setShowEmailFieldError(false);
            return
        }
        //show error if input does not match the pattern
        let pattern = new RegExp("^([A-Z|a-z|0-9](.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((.){0,1}[A-Z|a-z|0-9]){2}.[a-z]{2,3}$");
        let verified = pattern.test(e.target.value);
        if (verified){
            setShowEmailFieldError(false);
        } else {
            setShowEmailFieldError(true);
        }
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormSuccess(true);
        window.scrollTo(0,0);
    }
    const updateFormSuccess = () => setFormSuccess(false);

    return (
        <div>
            {formSuccess ? (
                <div>
                    <Container className="border border-round mt-5">
                        <h1 className="display-4 text-center mt-5"><strong>Contact Us</strong></h1>
                        <h1 className="display-4 text-center text-success" style={{marginTop: "100px"}}>Your message has been sent!</h1>
                        <h1 className="text-center text-success" style={{fontSize: "150px"}}><BsCheckCircle/></h1>  
                        <Button type="button" className="btn btn-lg btn-danger w-100 mb-1 py-3" style={{marginTop: "100px"}} onClick={updateFormSuccess}>Done</Button>
                    </Container>
                </div>
            ) : (
                <div>
                <Container className="border border-round mt-5">
                <h1 className="display-4 text-center mt-5"><strong>Contact Us</strong></h1>
                <p className="lead text-center">You will be contacted by one of our representatives within 24 hours of sending your message</p>
                <Form className="p-5" onSubmit={ handleFormSubmit }>
                    <Form.Group controlId="formBasicFullName">
                        <Form.Control type="text" placeholder="Enter full name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email (example@example.com)" onChange={updateEmailError}/>
                        {showEmailFieldError ? <div className="text-danger mb-3">Invalid email address. Please insert a valid email address</div> : <div hidden></div>} 
                    </Form.Group>

                    <Form.Group controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <textarea className="form-control" rows="10" placeholder="Your message"></textarea>
                    </Form.Group>
                    <Button type="submit" className="btn btn-lg w-100 py-3 btn-danger"> Submit </Button>
                    </Form>
                </Container>
            </div>
            )}
        </div>
    )
}
