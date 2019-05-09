import React, { Component } from "react";

import { Jumbotron, Button } from "reactstrap";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Clients extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">NoNameYet</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact">
                  Contact
                </NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>

        <Jumbotron>
          <h1 className="display-3">PAWS Veterinary Services</h1>
          <p className="lead">Description</p>
          <hr className="my-2" />
        </Jumbotron>
      </div>
    );
  }
}
