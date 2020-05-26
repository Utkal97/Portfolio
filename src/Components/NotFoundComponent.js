import React from 'react';

function NotFound(props) {
    console.log("Not found triggered.");
    return (
        <div className="container">
            <img src="images/not_found.png" alt="404 not found" />
            <p>
                The page you have requested for is not present. Please go Home.
            </p>
        </div>
    );
}

export default NotFound;