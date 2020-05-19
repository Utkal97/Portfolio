import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import Skills from './SkillsComponent';
import Education from './EducationComponent';
import POS from './POSComponent';
import Profiles from './ProfilesComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects : require('../Shared/projects.json'),
            skills : require('../Shared/skills.json'),
            pos : require('../Shared/positionsOfResponsibility.json'),
            education : require('../Shared/education.json'),
            profiles : require('../Shared/profiles.json')
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
                />
            );
        }

        return (
            <React.Fragment>
                <Header />
                <Switch >
                    <Route path="/home" component={HomePage} />
                    <Route path="/projects" component={() => <Projects projects={this.state.projects}/> } />
                    <Route path="/skills" component={() => <Skills skills={this.state.skills}/> } />
                    <Route path="/education" component={() => <Education education={this.state.education}/> } />
                    <Route path="/POS" component={() => <POS pos={this.state.pos}/> } />
                    <Route path="/profiles" component={() => <Profiles profiles={this.state.profiles} />} />
                    <Redirect to="/home" />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Main;