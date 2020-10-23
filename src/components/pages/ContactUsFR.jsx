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
                        <h1 className="display-4 text-center mt-5"><strong>Nous contacter</strong></h1>
                        <h1 className="display-4 text-center text-success" style={{marginTop: "100px"}}>Votre message a été envoyé!</h1>
                        <h1 className="text-center text-success" style={{fontSize: "150px"}}><BsCheckCircle/></h1>  
                        <Button type="button" className="btn btn-lg btn-danger w-100 mb-1 py-3" style={{marginTop: "100px"}} onClick={updateFormSuccess}>Terminé</Button>
                    </Container>
                </div>
            ) : (
            <div>
                <Container className="border border-round mt-5">
                    <h1 className="display-4 text-center mt-5"><strong>Nous contacter</strong></h1>
                    <p className="lead text-center">Un de nos représentants vous contactera dans les 24 heures suivant l'envoi de votre message</p>
                    <Form className="p-5" onSubmit={ handleFormSubmit }>
                    <Form.Group controlId="formBasicFullName">
                        <Form.Control type="text" placeholder="Entrez le nom complet" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Courriel (example@example.com)" onChange={updateEmailError}/>
                        {showEmailFieldError ? <div className="text-danger mb-3">Adresse e-mail invalide. Veuillez insérer une adresse email valide</div> : <div hidden></div>} 
                    </Form.Group>

                    <Form.Group controlId="formBasicMessage">
                        <textarea className="form-control" rows="10" placeholder="Votre message"></textarea>
                    </Form.Group>
                    <Button type="submit" className="btn btn-lg w-100 py-3 btn-danger"> Soumettre </Button>
                    </Form>
                </Container>
            </div>
            )}
        </div>
    )
}
