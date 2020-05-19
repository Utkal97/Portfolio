import React from 'react';
import { Table } from 'reactstrap';

function Education({education}) {

    const list = education.map((element) => {
        return (
            <tr key={element.level}>
                <th scope={element.level}>{element.level}</th>
                <td>{element.institute}</td>
                <td>{element.major}</td>
                <td>{element.score}</td>
            </tr>
        )
    });

    return (
        <div className="container">
            <Table>
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>Insitution</th>
                        <th>Major</th>
                        <th>Score</th>
                    </tr>
                    {list}
                </thead>
            </Table>
        </div>
    );
}

export default Education;