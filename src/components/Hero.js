import React from "react";
import './Hero.css';
import './globalStyles.css';
import ProfilePic from './assets/profile-pic.png';
import Resume from './assets/Resume.pdf';
import LinkedInLogo from './assets/linkedin.png';
import GitHubLogo from './assets/github.png';

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero">
                <img src={ProfilePic} alt="Ricky" id="hero-img"/>
            
                <div>
                    <div className="text-container">
                        <p>Hello, I'm</p>
                        <h1>Ricky Ly</h1>
                        <h3>Web Developer</h3>
                    </div>

                    <div className="button-container">
                        <a href={Resume} target="_blank" id="cv-link" rel="noreferrer">My Resume</a>

                        <a href="https://www.linkedin.com/in/rickyly1/" className="logo-link" target="_blank" rel="noreferrer"><img src={LinkedInLogo} alt="LinkedIn Logo"/></a>
                        
                        <a href="https://github.com/rickyly1" className="logo-link" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="GitHub Logo"/></a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Hero;