import React from 'react';

import Projects from './ProjectsComponent';
import Skills from './SkillsComponent';
import Education from './EducationComponent';
import POS from './POSComponent';
import Profiles from './ProfilesComponent';

function Home(props) {

    return (
        <React.Fragment>
            <Education education={props.education} />
            <Projects projects={props.projects} />
            <Skills skills={props.skills} />
            <Profiles profiles={props.profiles} />
            <POS pos={props.pos} />
        </React.Fragment>
    );
}

export default Home;