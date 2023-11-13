import React from "react";
import './Skills.css';
import './globalStyles.css';

// language/library logos
import HTMLLogo from './assets/html.png';
import CSSLogo from './assets/css.svg';
import JSLogo from './assets/javascript.png';
import PythonLogo from './assets/python.png';
import JavaLogo from './assets/java.png';
import SassLogo from './assets/sass.png';
import ReactLogo from './assets/react.png';
import AngularLogo from './assets/angular.png';
import CLogo from './assets/cplusplus.png';
import NodeLogo from './assets/nodejs.png';
import MongoLogo from './assets/mongodb.png';
import TSLogo from './assets/typescript.png';

// other tech logos
import BootstrapLogo from './assets/bootstrap.png';
import FigmaLogo from './assets/figma.png';
import GitLogo from './assets/git.png';
import JiraLogo from './assets/jira.png';
import SlackLogo from './assets/slack.png';
import DiscordLogo from './assets/discord.png';

function Skills() {
    return (
        <div className="skills-container" id="skills">
            <div className="skills">
                <h1>Some skills I know...</h1>
                <div className="window">
                    <div className="logos-slide">
                        <img src={HTMLLogo} alt="HTML logo"/>
                        <img src={CSSLogo} alt="CSS logo"/>
                        <img src={JSLogo} alt="JavaScript logo"/>
                        <img src={PythonLogo} alt="Python logo"/>
                        <img src={JavaLogo} alt="Java logo"/>
                        <img src={SassLogo} alt="SASS logo"/>
                        <img src={ReactLogo} alt="React logo"/>
                        <img src={AngularLogo} alt="Angular logo"/>
                        <img src={CLogo} alt="C++ logo"/>
                        <img src={NodeLogo} alt="Node.js logo"/>
                        <img src={MongoLogo} alt="MongoDB logo"/>
                        <img src={TSLogo} alt="TypeScript logo"/>

                        <img src={HTMLLogo} alt="HTML logo"/>
                        <img src={CSSLogo} alt="CSS logo"/>
                        <img src={JSLogo} alt="JavaScript logo"/>
                        <img src={PythonLogo} alt="Python logo"/>
                        <img src={JavaLogo} alt="Java logo"/>
                        <img src={SassLogo} alt="SASS logo"/>
                        <img src={ReactLogo} alt="React logo"/>
                        <img src={AngularLogo} alt="Angular logo"/>
                        <img src={CLogo} alt="C++ logo"/>
                        <img src={NodeLogo} alt="Node.js logo"/>
                        <img src={MongoLogo} alt="MongoDB logo"/>
                        <img src={TSLogo} alt="TypeScript logo"/>
                    </div>
                </div>
                
                <h1>...and some tools I know</h1>
                <div className="window">
                    <div className="logos-slide">
                        <img src={BootstrapLogo} alt="Bootstrap logo"/>
                        <img src={FigmaLogo} alt="Figma logo"/>
                        <img src={GitLogo} alt="Git logo"/>
                        <img src={JiraLogo} alt="Jira logo"/>
                        <img src={SlackLogo} alt="Slack logo"/>
                        <img src={DiscordLogo} alt="Discord logo"/>

                        <img src={BootstrapLogo} alt="Bootstrap logo"/>
                        <img src={FigmaLogo} alt="Figma logo"/>
                        <img src={GitLogo} alt="Git logo"/>
                        <img src={JiraLogo} alt="Jira logo"/>
                        <img src={SlackLogo} alt="Slack logo"/>
                        <img src={DiscordLogo} alt="Discord logo"/>

                        <img src={BootstrapLogo} alt="Bootstrap logo"/>
                        <img src={FigmaLogo} alt="Figma logo"/>
                        <img src={GitLogo} alt="Git logo"/>
                        <img src={JiraLogo} alt="Jira logo"/>
                        <img src={SlackLogo} alt="Slack logo"/>
                        <img src={DiscordLogo} alt="Discord logo"/>

                        <img src={BootstrapLogo} alt="Bootstrap logo"/>
                        <img src={FigmaLogo} alt="Figma logo"/>
                        <img src={GitLogo} alt="Git logo"/>
                        <img src={JiraLogo} alt="Jira logo"/>
                        <img src={SlackLogo} alt="Slack logo"/>
                        <img src={DiscordLogo} alt="Discord logo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;