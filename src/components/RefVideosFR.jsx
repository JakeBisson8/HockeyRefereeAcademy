import React from 'react'
import VideoContainer from './VideoContainer';
import {Container} from 'react-bootstrap';

//references: 
// https://www.youtube.com/embed/cTpVXTPVSi4
// https://www.youtube.com/embed/M_frqbl9k2I
// https://www.youtube.com/embed/kY0IEtfeUF8

export default function RefVideos() {
    return (
        <div>
            <Container className="my-5">
                <h3 className="display-3 text-center my-5">Vidéos des arbitres</h3>
                <hr/>
                <VideoContainer title="Mentalité pour un arbitre de hockey" link="https://www.youtube.com/embed/cTpVXTPVSi4" />
                <VideoContainer title="Comment mener une procédure de sanction" link="https://www.youtube.com/embed/M_frqbl9k2I" />
                <VideoContainer title="Comment effectuer un changement de ligne" link="https://www.youtube.com/embed/kY0IEtfeUF8" />
            </Container>
        </div>
    )
}
