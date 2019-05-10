import React, { Component } from "react";
import "./App.css";
import Clients from "./containers/Clients";
import Header from "./containers/Header";
import Pets from "./containers/Pets";

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
