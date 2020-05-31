import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import SideNavbar from './SideNavbarComponent';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import Skills from './SkillsComponent';
import Profiles from './ProfilesComponent';
import NotFound from './NotFoundComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects : require('../Shared/projects.json'),
            skills : require('../Shared/skills.json'),
            profiles : require('../Shared/profiles.json'),
            resume : require('../Shared/Resume.pdf')
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
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