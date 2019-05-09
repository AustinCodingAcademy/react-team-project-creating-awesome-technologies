<<<<<<< Updated upstream
import React, { Component } from 'react';
import './App.css';
import Clients from './containers/Clients';
=======
import React, { Component } from "react";
import "./App.css";
import Clients from "./containers/Clients";
import Header from "./containers/Header";
import Pets from "./containers/Pets";
>>>>>>> Stashed changes

// import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    clients: []
  }

  render() {
    return (
      <main>
        <Clients />

      {/* <BrowserRouter>
        <Link to="/clients/list">List</Link>
        <br />
        <Link to="/clients/">Clients</Link>
      
        <Route exact path="/clients/" component={Clients} />
      </BrowserRouter> */}

<<<<<<< Updated upstream
        
=======
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
            {/* <Link to="/pets">pets</Link> */}
            <br />
            <Route exact path="/pets/" component={Pets} />
          </BrowserRouter>
        </Container>
>>>>>>> Stashed changes
      </main>
    );
  }
}

export default App;
