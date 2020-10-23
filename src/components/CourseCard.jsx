import React from 'react'

import {
    Card
} from "react-bootstrap";

export default function CourseCard(props) {
    const { title, subtitle, text } = props;
    return (
        <div>
            <Card className="w-100">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
