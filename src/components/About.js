import React from "react";
import './About.css';
import './globalStyles.css';
import AboutPic from './assets/about-pic.jpg';

function About() {
    return (
        <div className="about-container" id="about-me">
            <div className="about" >
                <img src={AboutPic} alt="Ricky" id="about-img" />

                <div className="about-text">
                    <h1 className="about-title">
                        Get to know me!
                    </h1>

                    <p>
                        Hello! My name is Ricky Ly and I'm a recent grad &#40;March 2023&#41; from UC Irvine looking for a full time opportunity as a full-stack or front-end web developer. I am deeply motivated, endlessly curious, and take pride in my ability to handle feedback constructively. After graduating from UC Irvine I identified several areas of improvement in my skill set and have been rigorously working to fill those gaps, specifically by gaining experience in JavaScript, React, and databasing through pet projects.
                    </p>

                    <p>
                        When I'm not in front of a computer screen you can find me watching basketball &#40;LAKERS NATION&#41;, playing video games, or hanging out with my cats. Please feel free to contact me through my socials above or at lyr5@uci.edu to discuss any opportunities!
                    </p>
                </div>            
            </div>
        </div>
    );
}

export default About;