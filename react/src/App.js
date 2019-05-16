import React, { Component } from "react";
import "./App.css";

import Header from './containers/Header';
import Footer from './containers/Footer';
import Clients from './containers/Clients';
import Pets from './containers/Pets';


import {Link, BrowserRouter, Route}  from "react-router-dom";
import { Container, Nav, NavItem, NavLink } from "reactstrap";

class App extends Component {
  state = {
    clients: [],
    pets: []
  };

  render() {
    return (
      <main>
        <Header />

        <Container>

         
          <BrowserRouter>
            <br />
            <Nav>
              <NavItem>
              <Link to="/pets" className="nav nav-link mainNav">Pets</Link> 

              </NavItem>
              <NavItem>
              <Link to="/clients" className="nav nav-link mainNav">Clients</Link> 

              </NavItem>
            </Nav>

            <Route exact path="/clients" component={Clients} />
            
            <br />
            <Route exact path="/pets" component={Pets} />
          </BrowserRouter>
        </Container>

        <Footer />
      </main>
    );
  }
}

export default App;
