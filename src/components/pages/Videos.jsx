import React from 'react'
import { useState } from 'react';
import RefVideos from '../RefVideos';
import LinesVideos from '../LinesVideos';

import {
    Container,
} from 'react-bootstrap';

//references:
//https://reactjs.org/docs/hooks-state.html#tip-what-do-square-brackets-mean
export default function Videos() {
    const [refVideos, setRefVideos] = useState(true);
    return (
        <div>

            <h1 className="display-3 text-center my-5"><strong>Videos</strong></h1>
            <Container className="text-center">
                <button onClick={() => setRefVideos(false)} className="btn btn-lg btn-danger w-25 py-3 my-2 mr-5">Linesman Videos</button>
                <button onClick={() => setRefVideos(true)}className="btn btn-lg btn-danger w-25 py-3 my-2">Referee Videos</button>
            </Container>
            {/* Display Ref videos or Lines videos based on the button that was pressed */}
            {refVideos ? (<RefVideos/>) : (<LinesVideos/>) }
        </div>
    )
}
