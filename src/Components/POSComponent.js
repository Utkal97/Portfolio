import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function POS({pos}) {

    const list = pos.map((position) => {
        return (
            <ListGroupItem key={position} >{position}</ListGroupItem>
        );
    });

    return (
        <React.Fragment>
            <ListGroup className="pos">
                {list}
            </ListGroup>
        </React.Fragment>
    );
}

export default POS;