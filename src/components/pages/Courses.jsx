import React from 'react'
import LargeButton from '../LargeButton';

import {
    Container
} from "react-bootstrap";

export default function Courses() {
    const margin = {
        marginTop: "100px"
    };
    return (
        <div>
            <Container>
                <h1 className="display-3 text-center my-5"><strong>Courses</strong></h1>
                <LargeButton buttonText="Register Now!" link="/register"/>
            </Container>

            <Container style={margin}>
                <h1 className="display-4 text-center mt-5"><strong>Course 1</strong></h1>
                <hr/>
                <p className="lead">Course 1 is offered for officials who are newer to the job and the officials who are currently working house league hockey.
                We also recommend this course for officials with 2 or less years of experience.
                </p>
                <h3 className="mt-5">Description</h3>
                <p className="lead">This course will allow officials who are looking to officiate competitive levels, namely AA/AAA improve their skills
                in order to be considered to move up to the competitive levels. The course will cover the fundamentals of officiating hockey
                as well as introduce some important concepts needed to work the higher levels. The course will also teach concepts of routines off the ice
                to help improve your performance on the ice.
                </p>
                <h3 className="mt-5">What you will learn</h3>
                <ul>
                    <li className="lead">Positioning Fundamentals</li>
                    <li className="lead">Rules of the game</li>
                    <li className="lead">2 and 3 man systems</li>
                    <li className="lead">Pre-game / Post-Game routines</li>
                    <li className="lead">And more...</li>
                </ul>
            </Container>
            <Container style={margin}>
                <h1 className="display-4 text-center mt-5"><strong>Course 2</strong></h1>
                <hr/>
                <p className="lead">This course is recommended for officials who are currently working competitive hockey, namely AA/AAA hockey.
                We also reccomend this course for officials who have 3-5 years of experience.
                </p>
                <h3 className="mt-5">Description</h3>
                <p className="lead">This course will allow officials who are currently working competitve hockey, namely AA/AAA hockey to sharpen their skills
                in order to be considered to move up to the high performance levels. The course will cover advanced concepts of officiating hockey as well as introduce
                the 4-man system. The course will introduce officials to game management and the skill of communicationg on the ice to difuse any situation that may arise in a competitive setting.
                </p>
                <h3 className="mt-5">What you will learn</h3>
                <ul>
                    <li className="lead">Advanced positioning technique for a competitive setting</li>
                    <li className="lead">Game management</li>
                    <li className="lead">3 and 4 man systems</li>
                    <li className="lead">Communication skills</li>
                    <li className="lead">And more...</li>
                </ul>
            </Container>
            <Container style={margin}>
                <h1 className="display-4 text-center mt-5"><strong>Course 3</strong></h1>
                <hr/>
                <p className="lead">This course is recommended for officials who are currently working high performance hockey, namely Midget AAA (U18) and 
                Junior A/B/C. We also reccomend this course for officials who have 6+ years of experience.</p>
                <h3 className="mt-5">Description</h3>
                <p className="lead">This course will allow officials who are currently working high performance hockey, namely Midget AAA and Junior A/B/C to perfect their skills
                in order to potentially receive an offer to work professional hockey. This course will cover the advanced skills needed to excel in a high performance setting.
                Officials will learn about player management and dealing with the stresses that come with reffing high performance levels. Officials will also
                learn about handling scrums and fights in a proper maner to control their games.
                </p>
                <h3 className="mt-5">What you will learn</h3>
                <ul>
                    <li className="lead">Advanced positioning skills for high performance hockey</li>
                    <li className="lead">Player management</li>
                    <li className="lead">Dealing with stress</li>
                    <li className="lead">Handling scrums and fights</li>
                    <li className="lead">And more...</li>
                </ul>
            </Container>
            <Container className="mt-5">
                <LargeButton buttonText="Register Now!" link="/register"/>
            </Container>
        </div>
    )
}
