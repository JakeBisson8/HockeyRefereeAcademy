import React from 'react'
 

import {
    Card
} from 'react-bootstrap';

export default function ProfileCard(props) {
    const { name, bio, image } = props;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} width="150" height="175"/>
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <Card.Text>
                    {bio}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
