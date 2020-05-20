import React from "react";

function Resume({resume}) {
    return (
        <div className="btn">
            <a href = {resume} target = "_blank" rel="noopener noreferrer">Get Resume</a>
        </div>
    );
}

export default Resume;
