import React from 'react';
import "./globalStyles.css";
import "./Projects.css";

// project screenshots
import GitHubLogo from './assets/github.png';
import YourEdvisor from './assets/youredvisor.PNG';
import Blog from './assets/blog.PNG';
import ToDo from './assets/todolist.PNG';

function Projects() {
    return (
        <div className="project-container">
            <h1>Some Recent Projects</h1>

            <div className="card-container">
                <div className="card">
                    <h2>YourEdvisor</h2>
                    <img src={YourEdvisor} alt='A college matriculation prototype' className="preview"/>
                    <p>
                        A college matriculation service designed and prototyped as part of my senior capstone project at UC Irvine.
                    </p>

                    <div className="card-subtext">
                        <a href="https://github.com/rickyly1/youredvisor" className="logo-link" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="GitHub Logo"/>Codebase</a>
                        <h4>HTML/CSS/JS, Bootstrap</h4>
                    </div>
                </div>

                <div className="card">
                    <h2>Personal Blog</h2>
                    <img src={Blog} alt='A personal blog' className="preview"/>
                    <p>
                        A personal blog built with MongoDB that also utilizes authentification and verification. Posts can be written, edited, and deleted.
                    </p>

                    <div className="card-subtext">
                        <a href="https://github.com/rickyly1/personal-blog" className="logo-link" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="GitHub Logo"/>Codebase</a>
                        <h4>Node.Js, MongoDB, Express</h4>
                    </div>
                </div>

                <div className="card">
                    <h2>To-Do List</h2>
                    <img src={ToDo} alt='A to-do list' className="preview"/>
                    <p>
                        A to-do list utilizing local storage with features including categorization and item editing and deletion.
                    </p>

                    <div className="card-subtext">
                        <a href="https://github.com/rickyly1/ToDo-List" className="logo-link" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="GitHub Logo"/>Codebase</a>
                        <h4>HTML/CSS/JS</h4>
                    </div>
                </div>
            </div>

            <p id='project-call'>Check out some of my other works at <a href="https://github.com/rickyly1" target='_blank' rel='noreferrer'>my Github</a>!</p>
        </div>
    );
}

export default Projects;