import React, { Component } from "react";

import { Jumbotron, Button } from "reactstrap";

import {BrowserRouter, Link, Route} from 'react-router-dom';

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
import About from "./About";

export default class Header extends Component {
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

        
        <Navbar  color="light" light expand="md">
          <NavbarBrand href="/">Purrfect Paws Vet</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

          <BrowserRouter>

            <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/about" className="nav nav-link mainNav">About</Link> 

              </NavItem>
              
            </Nav>           

            </BrowserRouter>
          </Collapse>
        </Navbar>

        <Jumbotron>
          <h1 className="display-3">PAWS Veterinary Services</h1>
          <p class="-large">
          PAWS Veterinary Services team is committed to treat pets with kindness
          and compassion.
        </p>
          <hr className="my-2" />
        </Jumbotron>       
      </div>
    );
  }
}
