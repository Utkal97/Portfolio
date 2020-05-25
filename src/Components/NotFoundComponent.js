import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Button} from 'reactstrap';

function NotFound(props) {
    console.log("Not found triggered.");
    return (
        <React.Fragment>
            
            <img src="images/not_found.png" alt="404 not found" />
            <Button onClick={ () => <Redirect to="/home" /> } > Go Home </Button>
        </React.Fragment>
    );
}

export default NotFound;