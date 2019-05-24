import React, { Component } from "react";
import "./App.css";

import Header from './containers/Header';
import HomePage from './containers/HomePage';
import Footer from './containers/Footer';
import Clients from './containers/Clients';
import Pets from './containers/Pets';
import About from './containers/About';
import {Link, BrowserRouter, Route}  from "react-router-dom";
import { Row, Nav, NavItem } from "reactstrap";
import Appointments from "./containers/Appointments";

import { Container, NavLink } from "reactstrap";

class App extends Component {
  state = {
    clients: [],
    pets: []
  };

  render() {
    return (
      <main>
        <Header />
        
          <BrowserRouter>
            <Row>
                          
            <div className="col-md-2 leftNavigation">
            <Nav className="d-none d-md-block bg-dark sidebar leftMenu">
            <div className="sidebar-sticky">
              <NavItem>
              <Link to="/" className="nav nav-link mainNav">Home</Link> 

              </NavItem>
              <NavItem>
              <Link to="/pets" className="nav nav-link mainNav">Pets</Link> 

              </NavItem>
              <NavItem>
              <Link to="/clients" className="nav nav-link mainNav">Clients</Link> 

              </NavItem>
              
              <NavItem>
              <Link to="/appointments" className="nav nav-link mainNav">Appointments</Link> 

              </NavItem>
              </div>
            </Nav>
            </div>

            
            <div className="col-md-10">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/pets" component={Pets} />
            <Route exact path="/appointments" component={Appointments} />
            <Route exact path="/About/" component={About} />

            </div>
            </Row>

          </BrowserRouter>

        <Footer />
      </main>
    );
  }
}

export default App;
