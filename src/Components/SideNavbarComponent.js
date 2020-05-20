import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Resume from './ResumeComponent';

class SideNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen : false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen : !(this.state.isNavOpen)
        });
    }

    render() {
        return (
            <Navbar >
                <Nav navbar>

                    <NavItem>
                        <NavLink to="/home"> Home </NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink to="/projects"> Projects </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to="/education"> Education </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to="/skills"> Skills </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to="/POS"> Positions of Responsibility </NavLink>
                    </NavItem>

                </Nav>
                <button className="btn btn-primary" id="get-resume-button">
                    <Resume resume={this.props.resume}/>
                </button>
            </Navbar>
        );
    }
}

export default SideNavbar;