import React from 'react'

import {
    Container
} from 'react-bootstrap';

export default function VideoContainer(props) {
    const {title, link} = props;
    const margin = {
        marginTop: "150px"
    };
    return (
        <div>
            <Container className="mb-5" style={margin}>
                <h3 class="display-4 text-center">{ title }</h3> 
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe title="video" class="embed-responsive-item" src={link} allowfullscreen></iframe>
                </div>
            </Container>
        </div>
    )
}
