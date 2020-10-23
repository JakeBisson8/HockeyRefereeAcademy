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
                <h3 className="display-3 text-center">Linesman Videos</h3>
                <hr/>
                <VideoContainer title="How to Run a Faceoff" link="https://www.youtube.com/embed/3_Vg1_z8wbk" />
                <VideoContainer title="Working Your Blue Line" link="https://www.youtube.com/embed/4OdzhxZ5MAk" />
                <VideoContainer title="Positioning as the Back Linesman" link="https://www.youtube.com/embed/avpClGSADUM" />
            </Container>
        </div>
    )
}
