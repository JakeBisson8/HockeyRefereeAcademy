import React from 'react'
import homeImage from './images/homepageimage.jpg';
import LargeButton from '../LargeButton';
import CourseCard from '../CourseCard';

import {
    Container,
    Row,
    Col
} from "react-bootstrap";

export default function Home() {
    const margin = {
        marginTop: "150px"
    };
    return (
        <div> 
            <div className="text-center"><img src={ homeImage } alt="ref" className="w-75"></img></div>
            <Container>
                <h1 className="display-4 text-center my-5"><strong>Hockey Referee Academy Welcomes You!</strong></h1>
                <p className="lead my-5">The Hockey Referee Academy welcomes all officials who are seeking to bring their 
                officiating skills to the next level. The Hockey Referee Academy offers three different courses that are 
                dedicated towards different classes of skill levels. Whether you are starting out as a new ref, reffing house league,
                reffing in a competitive setting or working high performance hockey, the HRA has a spot for you. If you enjoy what you hear, 
                we encourage you to register for one of our courses through our registration form by clicking the button below.
                </p>
               <LargeButton buttonText="Register Now!" link="/register"/>
            </Container>
            
            <Container className="w-100" style={margin}>
                <h1 className="display-4 text-center my-5"><strong>Our Courses!</strong></h1>
                <Row className="w-100 my-5">
                    <Col>
                        <CourseCard title="Course 1" subtitle="Casual Officials" text="This course is intended for beginner and casual referees who are looking to learn the fundamentals
                                behind officiating to prepare them for working competitive hockey"/>
                    </Col>
                    <Col>
                        <CourseCard title="Course 2" subtitle="Competitive Officials" text="This course is intended for the competitive officials who are looking to learn advanced concepts of officiating
                                to prepare them for working higher performance hockey." />
                    </Col>
                    <Col>
                    <CourseCard title="Course 3" subtitle="High Performance Officials" text="This course is intended for the high performance officials who are looking to perfect their skills for the 
                                most competitive of levels to prepare them for working professional levels" />
                    </Col>
                </Row>
                <LargeButton buttonText="More course info" link="/courses"/>
            </Container>

            <Container style={margin}>
                <h1 className="display-4 text-center my-5"><strong>Check out our free videos!</strong></h1>
                <p className="lead my-5">We offer free development videos for all officials looking to add some tips to their toolbox. 
                We split the videos into two categories "Referee" and "Linesman" so you can easily find videos for the positions you are looking to improve on
                Our videos are a great example of some of the concepts that will be covered within our courses. If you like what you see,
                you will enjoy participating in one of our courses. You can check out the videos by clicking on the button below.
                </p>
                <LargeButton buttonText="Watch videos" link="/videos"/>
            </Container>

            <Container style={margin}>
                <h1 className="display-4 text-center my-5"><strong>We are officials like you!</strong></h1>
                <p className="lead my-5">The Hockey Referee Academy instructors are officials just like you who are looking to 
                help improve the next generation of officials with their extensive knowledge of the job. They've all been in the same
                position as you and have worked hard to become some of the finest officials in the game. Our instructors have worked
                professional levels such as the OHL, WHL, AHL and NHL. To lean more about the Hockey Referee Academy or if you're looking to 
                contact us, you can use the corresponding button below. 
                </p>
                <LargeButton buttonText="More about us" link="/about"/>
                <LargeButton buttonText="Contact us" link="/contactus"/>
            </Container>
        </div>
    )
}
