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
                    <Link to="/HockeyRefereeAcademy/" className="text-danger text-decoration-none nav-link pr-4">Home</Link>
                    <Link to="/HockeyRefereeAcademy/courses" className="text-danger text-decoration-none nav-link pr-4">Courses</Link>
                    <Link to="/HockeyRefereeAcademy/videos" className="text-danger text-decoration-none nav-link pr-4">Videos</Link>
                    <Link to="/HockeyRefereeAcademy/about" className="text-danger text-decoration-none nav-link pr-4">About</Link>
                    <Link to="/HockeyRefereeAcademy/contactus" className="text-danger text-decoration-none nav-link pr-4">Contact Us</Link>
                    <Link to="/HockeyRefereeAcademy/register" className="btn btn-md btn-danger text-white nav-link">Register Now</Link>
                </Nav> 
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/HockeyRefereeAcademy">
                    <Home />
                </Route>
                <Route path="/HockeyRefereeAcademy/courses">
                    <Courses />
                </Route>
                <Route path="/HockeyRefereeAcademy/videos">
                    <Videos />
                </Route>
                <Route path="/HockeyRefereeAcademy/about">
                    <About />
                </Route>
                <Route path="/HockeyRefereeAcademy/contactus">
                    <ContactUs />
                </Route>
                <Route path="/HockeyRefereeAcademy/register">
                    <Register />
                </Route>
            </Switch>
        </div>
    )
}
