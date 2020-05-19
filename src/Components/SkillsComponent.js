import React from "react";
import { Table, Button } from 'reactstrap';

function RenderRow({list}) {
    
    return list.map((element) => {
        return(
                <Button key={element} color="info ml-1">{element}</Button>
        );
    });
}

function Skills({skills}) {

    const skill_list = [];
    for(let property in skills) {
        skill_list.push(
            <tr key={property}>
                <th scope='row'>{property}</th>
                <td>
                    <RenderRow list={skills[property]} />
                </td>
            </tr>
        );
    }

    return (
        <div className="container">
            <Table>
                <tbody>
                    {skill_list}
                </tbody>
            </Table>
        </div>
    );
}

export default Skills;