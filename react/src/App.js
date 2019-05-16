import React, { Component } from "react";
import "./App.css";

import Header from './containers/Header';
import Footer from './containers/Footer';
import Clients from './containers/Clients';
import Pets from './containers/Pets';


import {Link, BrowserRouter, Route}  from "react-router-dom";
import { Row, Nav, NavItem } from "reactstrap";

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
                          
            <div className="col-md-2">
            <Nav className="d-none d-md-block bg-light sidebar leftMenu">
            <div className="sidebar-sticky">
              <NavItem>
              <Link to="/pets" className="nav nav-link mainNav">Pets</Link> 

              </NavItem>
              <NavItem>
              <Link to="/clients" className="nav nav-link mainNav">Clients</Link> 

              </NavItem>
              </div>
            </Nav>
            </div>

            
            <div className="col-md-10">
            <Route exact path="/clients" component={Clients} />
            
            <br />
            <Route exact path="/pets" component={Pets} />
            </div>
            </Row>

            
          </BrowserRouter>

        <Footer />
      </main>
    );
  }
}

export default App;
