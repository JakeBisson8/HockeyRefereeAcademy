import React from 'react'
import Home from './pages/Home';
import Videos from './pages/Videos';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';
import Courses from './pages/Courses';

import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import {
    Navbar,
    Nav
  } from "react-bootstrap";

export default function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand><Link to="/" className="text-danger text-decoration-none">Hockey Ref Academy</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/" className="text-danger text-decoration-none nav-link pr-4">Home</Link>
                    <Link to="/courses" className="text-danger text-decoration-none nav-link pr-4">Courses</Link>
                    <Link to="/videos" className="text-danger text-decoration-none nav-link pr-4">Videos</Link>
                    <Link to="/about" className="text-danger text-decoration-none nav-link pr-4">About</Link>
                    <Link to="/contactus" className="text-danger text-decoration-none nav-link pr-4">Contact Us</Link>
                    <Link to="/register" className="btn btn-md btn-danger text-white nav-link">Register Now</Link>
                </Nav> 
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/courses">
                    <Courses />
                </Route>
                <Route path="/videos">
                    <Videos />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contactus">
                    <ContactUs />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </div>
    )
}
