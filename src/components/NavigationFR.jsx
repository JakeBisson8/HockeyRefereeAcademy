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
                    <Link to="/FR" className="text-danger text-decoration-none nav-link pr-4">Accueil</Link>
                    <Link to="/coursesFR" className="text-danger text-decoration-none nav-link pr-4">Cours</Link>
                    <Link to="/videosFR" className="text-danger text-decoration-none nav-link pr-4">Vidéos</Link>
                    <Link to="/aboutFR" className="text-danger text-decoration-none nav-link pr-4">À propos</Link>
                    <Link to="/contactusFR" className="text-danger text-decoration-none nav-link pr-4">Nous contacter</Link>
                    <Link to="/registerFR" className="btn btn-md btn-danger text-white nav-link">S'inscrire maintenant</Link>
                </Nav> 
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/FR">
                    <HomeFR />
                </Route>
                <Route path="/coursesFR">
                    <CoursesFR />
                </Route>
                <Route path="/videosFR">
                    <VideosFR />
                </Route>
                <Route path="/aboutFR">
                    <AboutFR />
                </Route>
                <Route path="/contactusFR">
                    <ContactUsFR />
                </Route>
                <Route path="/registerFR">
                    <RegisterFR />
                </Route>
            </Switch>
        </div>
    )
}
