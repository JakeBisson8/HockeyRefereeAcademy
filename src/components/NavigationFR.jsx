import React from 'react'
import HomeFR from './pages/HomeFR';
import VideosFR from './pages/VideosFR';
import AboutFR from './pages/AboutFR';
import ContactUsFR from './pages/ContactUsFR';
import RegisterFR from './pages/RegisterFR';
import CoursesFR from './pages/CoursesFR';

import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import {
    Navbar,
    Nav
  } from "react-bootstrap";

export default function NavigationFR() {
    return (
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand><Link to="/FR" className="text-danger text-decoration-none">Académie de référence du hockey</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/HockeyRefereeAcademy/FR" className="text-danger text-decoration-none nav-link pr-4">Accueil</Link>
                    <Link to="/HockeyRefereeAcademy/coursesFR" className="text-danger text-decoration-none nav-link pr-4">Cours</Link>
                    <Link to="/HockeyRefereeAcademy/videosFR" className="text-danger text-decoration-none nav-link pr-4">Vidéos</Link>
                    <Link to="/HockeyRefereeAcademy/aboutFR" className="text-danger text-decoration-none nav-link pr-4">À propos</Link>
                    <Link to="/HockeyRefereeAcademy/contactusFR" className="text-danger text-decoration-none nav-link pr-4">Nous contacter</Link>
                    <Link to="/HockeyRefereeAcademy/registerFR" className="btn btn-md btn-danger text-white nav-link">S'inscrire maintenant</Link>
                </Nav> 
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/HockeyRefereeAcademy/FR">
                    <HomeFR />
                </Route>
                <Route path="/HockeyRefereeAcademy/coursesFR">
                    <CoursesFR />
                </Route>
                <Route path="/HockeyRefereeAcademy/videosFR">
                    <VideosFR />
                </Route>
                <Route path="/HockeyRefereeAcademy/aboutFR">
                    <AboutFR />
                </Route>
                <Route path="/HockeyRefereeAcademy/contactusFR">
                    <ContactUsFR />
                </Route>
                <Route path="/HockeyRefereeAcademy/registerFR">
                    <RegisterFR />
                </Route>
            </Switch>
        </div>
    )
}
