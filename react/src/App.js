import React, { Component } from "react";
import "./App.css";
import Clients from "./containers/Clients";
import Header from "./containers/Header";

import { BrowserRouter, Route, Link } from "react-router-dom";

import { Container, Nav, NavItem, NavLink } from "reactstrap";
class App extends Component {
  state = {
    clients: []
  };

  render() {
    return (
      <main>
        <Header />

        <Container>
          <Nav className="ml-auto " navbar>
            <NavItem>
              <NavLink href="/clients">Clients</NavLink>
              <NavLink href="/pets">Pets</NavLink>
              <NavLink href="/appointments">Appointments</NavLink>
            </NavItem>
          </Nav>
          <BrowserRouter>
            <br />
            <Route exact path="/clients/" component={Clients} />
          </BrowserRouter>
        </Container>
      </main>
    );
  }
}

export default App;
