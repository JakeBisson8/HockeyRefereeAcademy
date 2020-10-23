import React from 'react'
import LargeButton from '../LargeButton';
import ProfileCard from '../ProfileCard';
import WesMcCauley from './images/mccauley.jpg';
import ChrisRooney from './images/rooney.jpg';
import KellySutherland from './images/sutherland.jpg';

import {
    Container,
    Row,
    Col
} from "react-bootstrap";

import {
    Link
} from "react-router-dom";

export default function About() {
    const margin = {
        marginTop: "150px"
    };
    return (
        <div>
            <Container>
                <h1 className="display-3 text-center mt-5"><strong>À propos</strong></h1>
            </Container>

            <Container style={margin}>
                <h3 className="text-center display-4">Notre objectif</h3>
                <hr/>
                <p class="lead">Nous nous sommes fixé comme objectif d'enseigner aux officiels afin de les aider à faire passer leur carrière d'officier au niveau supérieur.
                 Nous voulons former la prochaine génération d'officiels afin qu'ils puissent continuer à offrir une expérience juste et amusante à ses joueurs et entraîneurs
                 tout en s'amusant. Nous voulons voir tous nos fonctionnaires exceller dans leurs postes et potentiellement devenir un jour un professionnel
                 officiel.
                </p>
            </Container>

            <Container style={margin}>
                <h3 className="text-center display-4">Ce que nous faisons</h3>
                <hr/>
                <p class="lead"> Nous enseignons et formons nos officiels pour qu'ils deviennent les meilleurs officiels possibles.
                 Nous leur fournissons les connaissances et les compétences nécessaires pour faire passer leur carrière d'arbitre au niveau supérieur.
                 Nous enseignons aux officiels tous les aspects du travail afin qu'ils puissent avoir plus de contrôle sur leurs jeux. Si vous souhaitez
                 en savoir plus sur ce que nous faisons, vous pouvez lire sur nos cours ou consulter nos vidéos de développement gratuites en utilisant les boutons
                 au dessous de.
                </p>
                <Container className="text-center">
                    <Link to="/CoursesFR" className="btn btn-lg btn-danger w-25 py-3 my-2 mr-5">Cours</Link>
                    <Link to="/videosFR" className="btn btn-lg btn-danger w-25 py-3 my-2">Vidéos</Link>
                </Container>
            </Container>

            <Container style={margin}>
                <h3 className="text-center display-4">Qui nous sommes</h3>
                <hr/>
                <p class="lead"> Nous sommes un groupe d'officiels qui a travaillé au hockey professionnel dans des ligues telles que l'OHL, la WHL, l'AHL et la LNH.
                 Nous sommes passionnés par le fait de redonner au jeu et nous voulons donc apporter nos connaissances à la prochaine génération d'officiels.
                 Nous nous engageons à fournir les meilleurs cours possibles pour améliorer nos fonctionnaires de la meilleure façon possible.
                 Si vous souhaitez en savoir plus sur nous, nos fiches de profil sont ci-dessous. Si vous souhaitez nous contacter, vous pouvez cliquer sur le bouton sous les fiches de profil.
                </p>
                <Container className="w-100">
                    <Row className="w-100 my-5">
                        <Col>
                            <ProfileCard name="Wes McCauley" bio="Bonjour, je suis Wes McCauley. J'effectue actuellement ma 18e saison comme arbitre dans la LNH." image={WesMcCauley} />
                        </Col>
                        <Col>
                            <ProfileCard name="Chris Rooney" bio="Bonjour, je suis Chris Rooney. Je suis actuellement en train d'arbitrer ma 20e saison comme arbitre dans la LNH" image={ChrisRooney} />
                        </Col>
                        <Col>
                            <ProfileCard name="Kelly Sutherland" bio="Bonjour, je suis Kelly Sutherland. Je suis actuellement en train d'arbitrer ma 15e saison comme arbitre dans la LNH" image={KellySutherland} />
                        </Col>
                    </Row>
                </Container>
                <LargeButton buttonText="Nous contacter" link="/contactusFR"/>
            </Container>
        </div>
    )
}
