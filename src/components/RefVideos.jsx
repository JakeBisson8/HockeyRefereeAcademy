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
                <h3 className="display-3 text-center my-5">Referee Videos</h3>
                <hr/>
                <VideoContainer title="Mentality for a Hockey Referee" link="https://www.youtube.com/embed/cTpVXTPVSi4" />
                <VideoContainer title="How to Conduct a Penalty Procedure" link="https://www.youtube.com/embed/M_frqbl9k2I" />
                <VideoContainer title="How to Conduct a Line Change" link="https://www.youtube.com/embed/kY0IEtfeUF8" />
            </Container>
        </div>
    )
}
