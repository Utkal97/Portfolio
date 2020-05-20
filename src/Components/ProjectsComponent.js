import React from "react";

function RenderProject({project}) {
    return (
        <div key={project.name} className="card project-card col-sm-10">
            <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <h6 className="card-subtitle">{project.tech_stack}</h6>
                <p className="card-text">{project.desciption}</p>
                <a href={project.link_to_source_code} className="card-link" >Link to Source Code</a>
            </div>
        </div>
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
        <React.Fragment>
            {project_list}
        </React.Fragment>
    );
}

export default Projects;