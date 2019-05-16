

// import { BrowserRouter, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import Clients from "./containers/Clients";
import Header from "./containers/Header";
import Pets from "./containers/Pets";
import About from './containers/About';
import {BrowserRouter, Route, Link} from "react-router-dom";

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
            <Route exact path="/About/" component={About} />

          </BrowserRouter>
        </Container>
      </main>
    );
  }
}

export default App;
