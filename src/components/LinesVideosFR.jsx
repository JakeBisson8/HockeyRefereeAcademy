import React from 'react'
import VideoContainer from './VideoContainer';
import {Container} from 'react-bootstrap';


//references:
// https://www.youtube.com/embed/3_Vg1_z8wbk
// https://www.youtube.com/embed/4OdzhxZ5MAk
// https://www.youtube.com/embed/avpClGSADUM
export default function LinesVideos() {
    return (
        <div>
            <Container className="my-5">
                <h3 className="display-3 text-center">Vidéos de juge de lignes</h3>
                <hr/>
                <VideoContainer title="Comment exécuter une mise au jeu" link="https://www.youtube.com/embed/3_Vg1_z8wbk" />
                <VideoContainer title="Travailler votre ligne bleue" link="https://www.youtube.com/embed/4OdzhxZ5MAk" />
                <VideoContainer title="Positionnement en tant que juge de ligne arrière" link="https://www.youtube.com/embed/avpClGSADUM" />
            </Container>
        </div>
    )
}
