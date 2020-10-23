import React from 'react'
import homeImage from './images/homepageimage.jpg';
import LargeButton from '../LargeButton';
import CourseCard from '../CourseCard';

import {
    Container,
    Row,
    Col
} from "react-bootstrap";

export default function Home() {
    const margin = {
        marginTop: "150px"
    };
    return (
        <div> 
            <div className="text-center"><img src={ homeImage } alt="ref" className="w-75"></img></div>
            <Container>
                <h1 className="display-4 text-center my-5"><strong>L'Académie des arbitres de hockey vous souhaite la bienvenue!</strong></h1>
                <p className="lead my-5">L'Académie des arbitres de hockey accueille tous les officiels qui souhaitent apporter leur
                 officier des compétences au niveau suivant. L'Académie des arbitres de hockey propose trois cours différents qui sont
                 dédié à différentes classes de niveaux de compétence. Que vous débutiez en tant que nouvelle ligue d'arbitrage,
                 dans un environnement compétitif ou en travaillant au hockey de haute performance, la HRA a une place pour vous. Si vous aimez ce que vous entendez,
                 nous vous encourageons à vous inscrire à l'un de nos cours via notre formulaire d'inscription en cliquant sur le bouton ci-dessous.
                </p>
               <LargeButton buttonText="S'inscrire maintenant!" link="/registerFR"/>
            </Container>
            
            <Container className="w-100" style={margin}>
                <h1 className="display-4 text-center my-5"><strong>Nos cours!</strong></h1>
                <Row className="w-100 my-5">
                    <Col>
                        <CourseCard title="Cours 1" subtitle="Officiels occasionnels" text="Ce cours est destiné aux arbitres débutants et occasionnels qui cherchent à apprendre les bases
                                 derrière l'arbitrage pour les préparer au hockey de compétition"/>
                    </Col>
                    <Col>
                        <CourseCard title="Cours 2" subtitle="Officiels compétitifs" text="Ce cours est destiné aux officiels de compétition qui cherchent à apprendre des concepts avancés d'arbitrage
                                 pour les préparer à travailler au hockey de haute performance." />
                    </Col>
                    <Col>
                    <CourseCard title="Cours 3" subtitle="Officiels de haute performance" text="Ce cours est destiné aux officiels de haut niveau qui cherchent à perfectionner leurs compétences pour
                                 niveaux les plus compétitifs pour les préparer à des niveaux professionnels" />
                    </Col>
                </Row>
                <LargeButton buttonText="Plus d'informations sur le cours" link="/coursesFR"/>
            </Container>

            <Container style={margin}>
                <h1 className="display-4 text-center my-5"><strong>Découvrez nos vidéos gratuites!</strong></h1>
                <p className="lead my-5">Nous proposons des vidéos de développement gratuites pour tous les fonctionnaires souhaitant ajouter des conseils à leur boîte à outils.
                 Nous avons divisé les vidéos en deux catégories "Arbitre" et "Juge de lignes" afin que vous puissiez facilement trouver des vidéos pour les postes que vous souhaitez améliorer.
                 Nos vidéos sont un excellent exemple de certains des concepts qui seront abordés dans nos cours. Si vous aimez ce que vous voyez,
                 vous aurez plaisir à participer à l'un de nos cours. Vous pouvez visionner les vidéos en cliquant sur le bouton ci-dessous.
                </p>
                <LargeButton buttonText="Regarde des vidéos" link="/videosFR"/>
            </Container>

            <Container style={margin}>
                <h1 className="display-4 text-center my-5"><strong>Nous sommes des fonctionnaires comme vous!</strong></h1>
                <p className="lead my-5">Les instructeurs de la Hockey Referee Academy sont des officiels comme vous qui cherchent à
                 aider à améliorer la prochaine génération de fonctionnaires grâce à leur connaissance approfondie de l'emploi. Ils ont tous été dans le même
                 position que vous et avez travaillé dur pour devenir certains des meilleurs officiels du jeu. Nos instructeurs ont travaillé
                 niveaux professionnels tels que OHL, WHL, AHL et NHL. Pour en savoir plus sur la Hockey Referee Academy ou si vous cherchez à
                 contactez-nous, vous pouvez utiliser le bouton correspondant ci-dessous.
                </p>
                <LargeButton buttonText="En savoir plus sur nous" link="/aboutFR"/>
                <LargeButton buttonText="Nous contacter" link="/contactusFR"/>
            </Container>
        </div>
    )
}
