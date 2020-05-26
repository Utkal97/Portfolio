import React from 'react';

import Projects from './ProjectsComponent';
import Skills from './SkillsComponent';
import POS from './POSComponent';
import Profiles from './ProfilesComponent';


function Home(props) {

    return (
        <React.Fragment>
            
            <div className="card home-card col-sm-10">
                <div className="card-body">        
                    <h5 className="card-title">Projects</h5>            
                    <Projects projects={props.projects} />
                </div>
            </div>
            
            <div className="card home-card col-sm-10">
                <div className="card-body">
                    <h5 className="card-title">Skills</h5>
                    <Skills skills={props.skills} />                        
                </div>
            </div>

            <div className="card home-card col-sm-10">
                <div className="card-body">
                    <h5 className="card-title">Profiles</h5>
                    <Profiles profiles={props.profiles} />                    
                </div>
            </div>

            <div className="card home-card col-sm-10">
                <div className="card-body">
                    <h5 className="card-title">Positions of Responsibility</h5>
                    <POS pos={props.pos} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;