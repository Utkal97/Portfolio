import React from "react";
import { Table } from 'reactstrap';


function RenderRow({profile_link}) {

    return (
        <React.Fragment>
            <td> <a href={profile_link}>{profile_link}</a> </td>            
        </React.Fragment>
    );
}

function Profiles({profiles}) {

    const profile_list = [];
    for(let property in profiles) {
        profile_list.push(
            <tr key={property}>
                <th scope='row'>{property}</th>
                <RenderRow profile_link={profiles[property]} />
            </tr>
        );
    }

    return (
        <div className="container">
            <Table>
                <tbody>
                    {profile_list}
                </tbody>
            </Table>
        </div>
    );
}

export default Profiles;