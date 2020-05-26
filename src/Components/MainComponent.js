import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import SideNavbar from './SideNavbarComponent';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import Skills from './SkillsComponent';
import Education from './EducationComponent';
import POS from './POSComponent';
import Profiles from './ProfilesComponent';
import NotFound from './NotFoundComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects : require('../Shared/projects.json'),
            skills : require('../Shared/skills.json'),
            pos : require('../Shared/positionsOfResponsibility.json'),
            education : require('../Shared/education.json'),
            profiles : require('../Shared/profiles.json'),
            resume : require('../Shared/Resume.pdf')
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    projects = { this.state.projects.filter((project) => project.featured) }
                    skills = { this.state.skills }
                    pos = { this.state.pos }
                    education = { this.state.education.filter((level) => level.featured)}
                    profiles = { this.state.profiles }
                    resume = { this.state.resume }
                />
            );
        };

        return (
            <div className="row">

                <aside className="sidenav">
                    <SideNavbar resume={this.state.resume} />
                </aside>

                <main id="main" >
                    <Switch >
                        <Route path="/home" component={HomePage} />
                        <Route path="/projects" component={() => <Projects projects={this.state.projects}/> } />
                        <Route path="/skills" component={() => <Skills skills={this.state.skills}/> } />
                        <Route path="/education" component={() => <Education education={this.state.education}/> } />
                        <Route path="/POS" component={() => <POS pos={this.state.pos}/> } />
                        <Route path="/profiles" component={() => <Profiles profiles={this.state.profiles} />} />
                        <Route path="/notfound" component={NotFound} />
                        <Redirect to="/home" />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Main;