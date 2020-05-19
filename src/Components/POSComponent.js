import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function POS({pos}) {

    const list = pos.map((position) => {
        return (
            <ListGroupItem key={position} >{position}</ListGroupItem>
        );
    });

    return (
        <div className="container">
            <ListGroup>
                {list}
            </ListGroup>
        </div>
    );
}

export default POS;