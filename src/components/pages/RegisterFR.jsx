import React from 'react'
import { useState } from 'react';

import {
    Form,
    Button,
    Container,
    Modal
} from "react-bootstrap";

import {
    Link
} from 'react-router-dom';

import {BsCheckCircle} from 'react-icons/bs';


//Modal: https://react-bootstrap.github.io/components/modal/

export default function Register() {
    const [show, setShow] = useState(false);
    const [suggestion, setSuggestion] = useState("Course 1");
    const [yearsOfExperience, setYearsOfExperience] = useState(0);
    const [highestLevel, setHighestLevel] = useState("Course 1");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [courseSelected, setCourseSelected] = useState("");
    const [creditCard, setCreditCard] = useState("");
    const [formSuccess, setFormSuccess] = useState(false);
    const [showCardFieldError, setShowCardFieldError] = useState(false);
    const [showEmailFieldError, setShowEmailFieldError] = useState(false);
    const [showPhoneFieldError, setShowPhoneFieldError] = useState(false);
    const [courseInfo] = useState([
        {name: "Course 1", subtotal:150, tax:10, total:160, id:"1"},
        {name: "Course 2", subtotal:160, tax:10, total:170, id:"2"},
        {name: "Course 3", subtotal:170, tax:10, total:180, id:"3"}
    ]);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);
    const updateFormSuccess = () => setFormSuccess(false);
    const updateCreditCard = (e) => {
        
        //don't show the error if length is zero
        if (e.target.value.length === 0){
            setShowCardFieldError(false);
            return
        }
        //show error if input does not match the pattern
        let pattern = new RegExp("^[0-9]{4}[ -.][0-9]{4}[ -.][0-9]{4}[ -.][0-9]{4}$");
        let verified = pattern.test(e.target.value);
        if (verified){
            setShowCardFieldError(false);
        } else {
            setShowCardFieldError(true);
        }

        //set credit card variable with proper format 
        let s = ""
        let y = e.target.value.length;
        let x = y-4;
        let end = e.target.value.slice(x, y);
        if (y === 4){
            setCreditCard(e.target.value);
            return;
        }
        for (let i = 0; i<x; i++){
            if (i === 0){
                s+="";
            }
            else if (i % 5 === 0){
                s += "-";
            } else {
                s+="X";
            }
        }
        s += "-" + end;
        setCreditCard(s);
    }
    const updateCourseSelected = (e) => {
        for (let i = 0; i<courseInfo.length; i++){
            if (courseInfo[i].id === e.target.value){
                setCourseSelected(courseInfo[i].name);
                setSubtotal(courseInfo[i].subtotal);
                setTax(courseInfo[i].tax);
                setTotal(courseInfo[i].total);
            }
        }
    }
    const updateName = (e) => setName(e.target.value);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const updateLevel = (e) => setHighestLevel(e.target.value);
    const updateYears = (e) => setYearsOfExperience(e.target.value);
    const updatePhoneNumber = (e) => {
        //don't show the error if length is zero
        if (e.target.value.length === 0){
            setShowPhoneFieldError(false);
            return
        }
        //show error if input does not match the pattern
        let pattern = new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$");
        let verified = pattern.test(e.target.value);
        if (verified){
            setShowPhoneFieldError(false);
        } else {
            setShowPhoneFieldError(true);
        }
        setPhoneNumber(e.target.value);
    }
    const updateEmail = (e) => {
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
        setEmail(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormSuccess(true);
        window.scrollTo(0,0);
    }
    const handleModalFormSubmit = (e) => {
        e.preventDefault();
        console.log(yearsOfExperience);
        console.log(highestLevel);
        if (yearsOfExperience <= 2) {
            setSuggestion("Cours 1");
        } else if (2 < yearsOfExperience && yearsOfExperience <= 5 ) {
            setSuggestion("Cours 2");
        } else if (yearsOfExperience > 5) {
            setSuggestion("Cours 3");
        }

        if (highestLevel <= 5){
            setSuggestion("Cours 1");
        } else if (highestLevel > 5 && highestLevel <= 10){
            setSuggestion("Cours 2");
        } else if (highestLevel > 10) {
            setSuggestion("Cours 3");
        }
    }
    
    return (
        <div>
            <h1 className="display-4 text-center my-5"><strong>S'inscrire</strong></h1>

            {formSuccess ? (
                <div>
                    <Container className="border border-round mt-5">
                        <h1 className="display-4 text-center mt-5"><strong>Registration Form</strong></h1>
                        <h1 className="display-4 text-center text-success" style={{marginTop: "100px"}}>Participant registered successfully!</h1>
                        <h1 className="text-center text-success" style={{fontSize: "150px"}}><BsCheckCircle/></h1>  
                        <Button type="button" className="btn btn-lg btn-danger w-100 mb-1 py-3" style={{marginTop: "100px"}} onClick={updateFormSuccess}>Done</Button>
                    </Container>
                </div>
            ) : (
                <div>
                <Container className="border border-round mt-5">
                    <Form className="p-5" onSubmit={ handleFormSubmit }>
                        <h1 className="display-3 text-center">Formulaire d'inscription</h1>
                        <h1 className="display-4 mt-5 mb-3">Renseignements personnels</h1>
                        <Form.Group controlId="formBasicFullName">
                            <Form.Control type="text" placeholder="Full Name" onChange={updateName} required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Courriel (example@example.com)" pattern="^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$" onChange={updateEmail} required/>
                            {showEmailFieldError ? <div className="text-danger mb-3">Adresse e-mail invalide. Veuillez insérer une adresse email valide</div> : <div hidden></div>} 
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Control type="text" placeholder="Numéro de téléphone (123-456-7890)" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$" onChange={updatePhoneNumber} required/>
                            {showPhoneFieldError ? <div className="text-danger mb-3">Numéro de téléphone invalide. Veuillez insérer un numéro de téléphone valide</div> : <div hidden></div>} 
                        </Form.Group>

                        <h1 className="display-4 mt-5 mb-3">Sélection de cours</h1>
                        <p className="lead">Vous ne savez pas quel cours choisir? <button type="button" className="btn btn-sm btn-danger " onClick={handleShow}>Cliquez ici</button></p>
                        <Form.Group controlId="formBasicFullName">
                        <select className="form-control" id="selectCourse" onChange={updateCourseSelected} required>
                            <option>Sélectionnez un cours</option>
                            <option value="1">Cours 1</option>
                            <option value="2">Cours 2</option>
                            <option value="3">Cours 3</option>
                        </select>
                        </Form.Group>

                        <h1 className="display-4 mt-5 mb-3">Informations de paiement</h1>
                        <p className="lead mb-5">Total: ${subtotal} <br/>
                        Impôt: ${tax} <br/>
                        <strong>Total: ${total}</strong></p>
                        <Form.Group controlId="formBasicFullName">
                            <small>** Notez que le paiement ne sera pas effectué tant que l'inscription n'aura pas été confirmée à l'étape suivante</small>
                            <Form.Control type="text" placeholder="Credit Card (xxxx-xxxx-xxxx-xxxx)" pattern="^[0-9]{4}[ -.][0-9]{4}[ -.][0-9]{4}[ -.][0-9]{4}$" onChange={updateCreditCard} required/>
                            {showCardFieldError ? <div className="text-danger my-3">Numéro de carte de crédit invalide. Veuillez insérer un numéro de carte de crédit valide</div> : <div hidden></div>} 
                        </Form.Group>
                        <hr className="my-5"/>
                        <h1 className="display-4 mt-5 mb-3">Confirmation</h1>
                
                        <p className="lead mb-0"><strong>Renseignements personnels</strong></p>
                        <p className="lead mb-5">Nom complet: {name} <br/>
                            Email: {email} <br/>
                            Téléphone: {phoneNumber}
                        </p>
                        <p className="lead mb-0"><strong>Sélection de cours</strong></p>
                        <p className="lead mb-5">Cours sélectionné: {courseSelected}
                        </p>
                        <p className="lead mb-0"><strong>Informations de paiement</strong></p>
                        <p className="lead mb-5">Total: ${subtotal} <br/>
                            Impôt: ${tax} <br/>
                        <strong>Total: ${total}</strong> <br/>
                        Carte de crédit: {creditCard}
                        </p>
                        <p>Remarque: En cliquant sur s'inscrire, le participant sera inscrit au cours et le paiement sera effectué.</p>
                        <Button type="submit" className="btn btn-lg w-100 py-3 btn-danger"> S'inscrire </Button>
                    </Form>
                </Container>
                </div>
            )}

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Suggestion de cours</Modal.Title>
                </Modal.Header>
                <Modal.Body>Remplissez les informations ci-dessous afin que nous puissions vous proposer le meilleur cours. Tu peux <Link to="/contactusFR">Nous contacter</Link> si tu es encore
                 incertain du meilleur cours pour vous
                    <Form className="mt-5" onSubmit={ handleModalFormSubmit }>
                        <Form.Group controlId="YearsOfExperience">
                            <Form.Control type="number" min="0" onChange={updateYears} placeholder="des années d'expérience" />
                        </Form.Group>
                        <Form.Group controlId="SelectLevel">
                            <select className="form-control" id="selectLevel" onChange={updateLevel} required>
                                <option>Le plus haut niveau arbitré</option>
                                <option value="15">CIS (Hockey universitaire)</option>
                                <option value="14">Junior A/B/C</option>
                                <option value="13">Midget AAA (U18)</option>
                                <option value="12">Midget AA/Rep B (U18)</option>
                                <option value="11">Midget House League (U18)</option>
                                <option value="10">Bantam AAA (U16)</option>
                                <option value="9">Bantam AA/Rep B (U16)</option>
                                <option value="8">Bantam House League (U16)</option>
                                <option value="7">PeeWee AAA (U14)</option>
                                <option value="6">PeeWee AA/Rep B (U14)</option>
                                <option value="5">PeeWee House League (U14)</option>
                                <option value="4">Atom AA/Rep B (U12)</option>
                                <option value="3">Atom House League (U12)</option>
                                <option value="2">Novice Competitive (U10)</option>
                                <option value="1">Novice House League (U10)</option>
                            </select>
                        </Form.Group>
                        <button type="submit" className="btn btn-lg w-100 btn-danger">Générer une suggestion</button>
                    </Form>
                    <p className="lead mt-5"><strong>Notre suggestion: {suggestion}</strong></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-lg btn-secondary w-25" onClick={handleClose}>
                    Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
