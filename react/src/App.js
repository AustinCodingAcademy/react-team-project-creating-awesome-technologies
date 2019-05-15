import React, { Component } from "react";
import "./App.css";
import Clients from "./containers/Clients";
import Header from "./containers/Header";
import Pets from "./containers/Pets";
<<<<<<< HEAD
<<<<<<< HEAD
import {BrowserRouter, Route}  from "react-router-dom";


=======
import { BrowserRouter, Route, Link } from "react-router-dom";
>>>>>>> b63cfabce4634131038f620180fe581dd87e8e9e
=======

>>>>>>> b7eaa8431e5ef9ec97baa2f68a90a5144198730a
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
          <Nav>
            <NavItem>
              <NavLink href="/clients">Clients</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/pets">Pets</NavLink>
              </NavItem>
              <NavItem>              
              <NavLink href="/appointments">Appointments</NavLink>

      {/* <NavLink href="#" to="/clients">Clients</NavLink>
              <NavLink href="#" to="/pets">Pets</NavLink>
              <NavLink href="#" to="/appointments">Appointments</NavLink> */}
            </NavItem>
      
          </Nav>
          <BrowserRouter>
            <br />
            <Route exact path="/clients/" component={Clients} />
            {/* <Link to="/pets">pets</Link> */}
            <br />
            <Route exact path="/pets/" component={Pets} />
          </BrowserRouter>
        </Container>
      </main>
    );
  }
}

export default App;
