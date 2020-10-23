import React from 'react'
import LargeButton from '../LargeButton';
import ProfileCard from '../ProfileCard';
import WesMcCauley from './images/mccauley.jpg';
import ChrisRooney from './images/rooney.jpg';
import KellySutherland from './images/sutherland.jpg';

import {
    Container,
    Row,
    Col
} from "react-bootstrap";

import {
    Link
} from "react-router-dom";

export default function About() {
    const margin = {
        marginTop: "150px"
    };
    return (
        <div>
            <Container>
                <h1 className="display-3 text-center mt-5"><strong>About</strong></h1>
            </Container>

            <Container style={margin}>
                <h3 className="text-center display-4">Our Goal</h3>
                <hr/>
                <p class="lead">We have made it our goal to teach officials in order to help them take their officiating career to the next level.
                We want to train the next generation of officials so they can continue providing a fair and fun experience for its players and coaches
                while having fun themselves. We want to see all of our officials excel in their positions and potentially one day become a professional 
                official.
                </p>
            </Container>

            <Container style={margin}>
                <h3 className="text-center display-4">What we do</h3>
                <hr/>
                <p class="lead"> We teach and train our officials to become the best officials they can possibly become. 
                We provide them with the knowledge and skills required to take their officiating career to the next level.
                We teach officials all aspect of the job so they can have more control over their games. If you would like to
                learn more about what we do, you can read about our courses or check out our free development videos using the buttons
                below.
                </p>
                <Container className="text-center">
                    <Link to="/Courses" className="btn btn-lg btn-danger w-25 py-3 my-2 mr-5">Courses</Link>
                    <Link to="/videos" className="btn btn-lg btn-danger w-25 py-3 my-2">Videos</Link>
                </Container>
            </Container>

            <Container style={margin}>
                <h3 className="text-center display-4">Who we are</h3>
                <hr/>
                <p class="lead"> We are a group of officials who have worked professional hockey in leagues such as the OHL, WHL, AHL, and NHL.
                We are passionate about giving back to the game and therefore we want to provide our knowledge to the next generation of officials.
                We are dedicated to providing the best courses possible to improve our officials in the best way possible.
                If you wish to learn more about us, our profile cards are below. If you wish to contact us, you can click the button under the profile cards.
                </p>
                <Container className="w-100">
                    <Row className="w-100 my-5">
                        <Col>
                            <ProfileCard name="Wes McCauley" bio="Hello, I am Wes McCauley. I'm currently reffing my 18th season as an NHL referee." image={WesMcCauley} />
                        </Col>
                        <Col>
                            <ProfileCard name="Chris Rooney" bio="Hello, I am Chris Rooney. I'm currently reffing my 20th season as an NHL referee" image={ChrisRooney} />
                        </Col>
                        <Col>
                            <ProfileCard name="Kelly Sutherland" bio="Hello, I am Kelly Surtherland. I'm currently reffing my 15th season as an NHL referee" image={KellySutherland} />
                        </Col>
                    </Row>
                </Container>
                <LargeButton buttonText="Contact us" link="/contactus"/>
            </Container>
        </div>
    )
}
