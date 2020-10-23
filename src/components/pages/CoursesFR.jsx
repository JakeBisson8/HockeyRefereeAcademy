import React from 'react'
import LargeButton from '../LargeButton';

import {
    Container
} from "react-bootstrap";

export default function Courses() {
    const margin = {
        marginTop: "100px"
    };
    return (
        <div>
            <Container>
                <h1 className="display-3 text-center my-5"><strong>Cours</strong></h1>
                <LargeButton buttonText="S'inscrire maintenant!" link="/registerFR"/>
            </Container>

            <Container style={margin}>
                <h1 className="display-4 text-center mt-5"><strong>Cours 1</strong></h1>
                <hr/>
                <p className="lead">Le cours 1 est offert aux officiels débutants et aux officiels qui travaillent actuellement au hockey de ligue maison.
                 Nous recommandons également ce cours aux fonctionnaires ayant 2 ans ou moins d'expérience.
                </p>
                <h3 className="mt-5">La description</h3>
                <p className="lead">Ce cours permettra aux officiels qui cherchent à arbitrer des niveaux compétitifs, à savoir AA / AAA d'améliorer leurs compétences
                 afin d'être considéré pour passer aux niveaux compétitifs. Le cours couvrira les principes fondamentaux du hockey officiel
                 ainsi que présenter certains concepts importants nécessaires pour travailler les niveaux supérieurs. Le cours enseignera également les concepts de routines hors glace
                 pour améliorer vos performances sur la glace.
                </p>
                <h3 className="mt-5">Ce que vous apprendrez</h3>
                <ul>
                    <li className="lead">Principes fondamentaux du positionnement</li>
                    <li className="lead">Règles du jeu</li>
                    <li className="lead">Systèmes à 2 et 3 personnes</li>
                    <li className="lead">Routines d'avant-match / d'après-match</li>
                    <li className="lead">Et plus...</li>
                </ul>
            </Container>
            <Container style={margin}>
                <h1 className="display-4 text-center mt-5"><strong>Cours 2</strong></h1>
                <hr/>
                <p className="lead">Ce cours est recommandé pour les officiels qui travaillent actuellement au hockey de compétition, à savoir le hockey AA / AAA.
                 Nous recommandons également ce cours aux fonctionnaires qui ont 3 à 5 ans d'expérience.
                </p>
                <h3 className="mt-5">La description</h3>
                <p className="lead">Ce cours permettra aux officiels qui travaillent actuellement au hockey de compétition, notamment au hockey AA / AAA, d'affiner leurs compétences
                 afin d'être considéré pour passer aux niveaux de performance élevés. Le cours couvrira les concepts avancés de l'arbitrage de hockey ainsi que présenter
                 le système à 4 personnes. Le cours présentera aux officiels la gestion du jeu et l'habileté de communiquer sur la glace pour dissiper toute situation qui pourrait survenir dans un environnement compétitif.
                </p>
                <h3 className="mt-5">Ce que vous apprendrez</h3>
                <ul>
                    <li className="lead">Technique de positionnement avancée pour un environnement compétitif</li>
                    <li className="lead">Gestion du jeu</li>
                    <li className="lead">Systèmes à 3 et 4 personnes</li>
                    <li className="lead">Compétences en communication</li>
                    <li className="lead">Et plus...</li>
                </ul>
            </Container>
            <Container style={margin}>
                <h1 className="display-4 text-center mt-5"><strong>Cours 3</strong></h1>
                <hr/>
                <p className="lead">Ce cours est recommandé aux officiels qui travaillent actuellement au hockey de haute performance, à savoir Midget AAA (U18) et
                 Junior A / B / C. Nous recommandons également ce cours aux fonctionnaires qui ont plus de 6 ans d'expérience.</p>
                <h3 className="mt-5">La description</h3>
                <p className="lead">Ce cours permettra aux officiels qui travaillent actuellement au hockey de haute performance, à savoir Midget AAA et Junior A / B / C, de perfectionner leurs compétences.
                 afin de recevoir potentiellement une offre pour travailler au hockey professionnel. Ce cours couvrira les compétences avancées nécessaires pour exceller dans un environnement de haute performance.
                 Les officiels en apprendront davantage sur la gestion des joueurs et sur la gestion du stress lié à la haute performance. Les officiels
                 apprenez à gérer les mêlées et les combats de manière appropriée pour contrôler leurs jeux.
                </p>
                <h3 className="mt-5">Ce que vous apprendrez</h3>
                <ul>
                    <li className="lead">Compétences de positionnement avancées pour le hockey haute performance</li>
                    <li className="lead">Gestion des joueurs</li>
                    <li className="lead">Faire face au stress</li>
                    <li className="lead">Gérer les mêlées et les combats</li>
                    <li className="lead">Et plus...</li>
                </ul>
            </Container>
            <Container className="mt-5">
                <LargeButton buttonText="S'inscrire maintenant!" link="/registerFR"/>
            </Container>
        </div>
    )
}
