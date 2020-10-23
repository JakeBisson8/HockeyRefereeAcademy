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
            setSuggestion("Course 1");
        } else if (2 < yearsOfExperience && yearsOfExperience <= 5 ) {
            setSuggestion("Course 2");
        } else if (yearsOfExperience > 5) {
            setSuggestion("Course 3");
        }

        if (highestLevel <= 5){
            setSuggestion("Course 1");
        } else if (highestLevel > 5 && highestLevel <= 10){
            setSuggestion("Course 2");
        } else if (highestLevel > 10) {
            setSuggestion("Course 3");
        }
    }
    
    return (
        <div>

            <h1 className="display-4 text-center my-5"><strong>Register</strong></h1>

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
                            <h1 className="display-3 text-center">Registration Form</h1>
                            <h1 className="display-4 mt-5 mb-3">Personal Information</h1>
                            <Form.Group controlId="formBasicFullName">
                                <Form.Control type="text" placeholder="Full Name" onChange={updateName} required/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email (example@example.com)" pattern="^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$" onChange={updateEmail} required/>
                                {showEmailFieldError ? <div className="text-danger mb-3">Invalid email address. Please insert a valid email address</div> : <div hidden></div>} 
                            </Form.Group>
                            <Form.Group controlId="formBasicPhone">
                                <Form.Control type="text" placeholder="Phone Number (123-456-7890)" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$" onChange={updatePhoneNumber} required/>
                                {showPhoneFieldError ? <div className="text-danger mb-3">Invalid phone number. Please insert a valid phone number</div> : <div hidden></div>} 
                            </Form.Group>

                            <h1 className="display-4 mt-5 mb-3">Course Selection</h1>
                            <p className="lead">Not sure what course to choose? <button type="button" className="btn btn-sm btn-danger " onClick={handleShow}>Click here</button></p>
                            <Form.Group controlId="formBasicFullName">
                            <select className="form-control" id="selectCourse" onChange={updateCourseSelected} required>
                                <option>Select a Course</option>
                                <option value="1">Course 1</option>
                                <option value="2">Course 2</option>
                                <option value="3">Course 3</option>
                            </select>
                            </Form.Group>

                            <h1 className="display-4 mt-5 mb-3">Payment Information</h1>
                            <p className="lead mb-5">Subtotal: ${subtotal} <br/>
                                Tax: ${tax} <br/>
                            <strong>Total: ${total}</strong></p>
                            <Form.Group controlId="formBasicFullName">
                                <small>**Note payment will not be made until registration has been confirmed in the next step</small>
                                <Form.Control type="text" placeholder="Credit Card (xxxx-xxxx-xxxx-xxxx)" pattern="^[0-9]{4}[ -.][0-9]{4}[ -.][0-9]{4}[ -.][0-9]{4}$" onChange={updateCreditCard} required/>
                                {showCardFieldError ? <div className="text-danger my-3">Invalid credit card number. Please insert a valid credit card number</div> : <div hidden></div>} 
                            </Form.Group>
                            <hr className="my-5"/>
                            <h1 className="display-4 mt-5 mb-3">Confirmation</h1>
                    
                            <p className="lead mb-0"><strong>Personal Information</strong></p>
                            <p className="lead mb-5">Full Name: {name} <br/>
                                Email: {email} <br/>
                                Phone: {phoneNumber}
                            </p>
                            <p className="lead mb-0"><strong>Course Selection</strong></p>
                            <p className="lead mb-5">Course Selected: {courseSelected}
                            </p>
                            <p className="lead mb-0"><strong>Payment Information</strong></p>
                            <p className="lead mb-5">Subtotal: ${subtotal} <br/>
                                Tax: ${tax} <br/>
                            <strong>Total: ${total}</strong> <br/>
                            Credit Card: {creditCard}
                            </p>
                            <p>Note: By clicking register, the participant will be registered into the course and payment will be made.</p>
                            <Button type="submit" className="btn btn-lg w-100 py-3 btn-danger"> Register </Button>
                        </Form>
                    </Container>
                </div>
            )}

        
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Course Suggestion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Fill in the information below so we can suggest the best course for you. You may <Link to="/contactus">contact us</Link> if you are still 
                unsure of the best course for you
                    <Form className="mt-5" onSubmit={ handleModalFormSubmit }>
                        <Form.Group controlId="YearsOfExperience">
                            <Form.Control type="number" min="0" onChange={updateYears} placeholder="Years of Experience" />
                        </Form.Group>
                        <Form.Group controlId="SelectLevel">
                            <select className="form-control" id="selectLevel" onChange={updateLevel} required>
                                <option>Highest level officiated</option>
                                <option value="15">CIS (University Hockey)</option>
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
                        <button type="submit" className="btn btn-lg w-100 btn-danger">Generate Suggestion</button>
                    </Form>
                    <p className="lead mt-5"><strong>Our Suggestion: {suggestion}</strong></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-lg btn-secondary w-25" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
