import React from 'react';
import "./globalStyles.css";
import "./Projects.css";

// project screenshots
import GitHubLogo from './assets/github.png';
import YourEdvisor from './assets/youredvisor.PNG';

function Projects() {
    return (
        <div className="project-container">
            <h1>Projects</h1>

            <div className="card-container">
                <div className="card">
                    <h2>YourEdvisor</h2>
                    <img src={YourEdvisor} alt='A college matriculation prototype' className="preview"/>
                    <p>
                        A college matriculation service designed and prototyped as part of my senior capstone project at UC Irvine.
                    </p>

                    <div className="card-subtext">
                        <a href="https://github.com/rickyly1" className="logo-link" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="GitHub Logo"/>Codebase</a>
                        <h4>HTML/CSS/JS, Bootstrap</h4>
                    </div>
                </div>

                {/** 
                <div className="card">
                    <h2>Personal Blog</h2>
                    <img src={YourEdvisor} alt='A college matriculation prototype' className="preview"/>
                    <p>
                        A college matriculation service designed and prototyped as part of my senior capstone project at UC Irvine.
                    </p>
                    <a href="https://github.com/rickyly1" className="logo-link" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="GitHub Logo"/>Codebase</a>
                    <h4>HTML/CSS/JS, Bootstrap</h4>
                </div>

                <div className="card">
                    <h2>YourEdvisor</h2>
                    <img src={YourEdvisor} alt='A college matriculation prototype' className="preview"/>
                    <p>
                        A college matriculation service designed and prototyped as part of my senior capstone project at UC Irvine.
                    </p>
                    <a href="https://github.com/rickyly1" className="logo-link" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="GitHub Logo"/>Codebase</a>
                    <h4>HTML/CSS/JS, Bootstrap</h4>
                </div>  */}
            </div>
        </div>
    );
}

export default Projects;