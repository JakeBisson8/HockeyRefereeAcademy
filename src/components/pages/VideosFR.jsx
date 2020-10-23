import React from 'react'
import { useState } from 'react';
import RefVideosFR from '../RefVideosFR';
import LinesVideosFR from '../LinesVideosFR';

import {
    Container,
} from 'react-bootstrap';

//references:
//https://reactjs.org/docs/hooks-state.html#tip-what-do-square-brackets-mean
export default function Videos() {
    const [refVideos, setRefVideos] = useState(true);
    return (
        <div>

            <h1 className="display-3 text-center my-5"><strong>Vidéos</strong></h1>
            <Container className="text-center">
                <button onClick={() => setRefVideos(false)} className="btn btn-lg btn-danger w-25 py-3 my-2 mr-5">Vidéos de juge de lignes</button>
                <button onClick={() => setRefVideos(true)}className="btn btn-lg btn-danger w-25 py-3 my-2">Vidéos des arbitres</button>
            </Container>
            {/* Display Ref videos or Lines videos based on the button that was pressed */}
            {refVideos ? (<RefVideosFR/>) : (<LinesVideosFR/>) }
        </div>
    )
}
