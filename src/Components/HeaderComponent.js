import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
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
            <Navbar expand="md">

                <NavbarToggler onClick={this.toggleNav} />
                    
                <NavbarBrand className="mr-auto" href ="/">Home</NavbarBrand>

                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar >

                        <NavItem>
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link" to="/education"> Education</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link" to="/skills">Skills</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link" to="/POS">Positions of Responsibility</NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;