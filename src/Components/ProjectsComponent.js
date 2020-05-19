import React from "react";
import { Media } from 'reactstrap';

function RenderProject({project}) {
    return (
        <Media key={project.name}>
            <Media body>
                <Media heading>{project.name}</Media>
                {project.desciption} <br />
                <a href={project.link_to_source_code} >Link to Source Code</a>
            </Media>
        </Media>
    );
}

function Projects({projects}) {

    const project_list = projects.map((project) => {
        return (
            <div key={project.name} className="container">
                <RenderProject project={project} />
            </div>
        );
    });

    return (
        <div className="container">
            {project_list}
        </div>
    );
}

export default Projects;