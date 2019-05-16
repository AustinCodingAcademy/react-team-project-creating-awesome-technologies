

import React, { Component } from "react";
import "./App.css";
import Clients from "./containers/Clients";
import Header from "./containers/Header";
import Pets from "./containers/Pets";
import About from './containers/About';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Container } from "reactstrap";

class App extends Component {
  state = {
    clients: []
  };

  render() {
    return (
      <main>
        <Header />
        <Container>
          <BrowserRouter>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/clients/">Clients</Link>
            <br />
            <Link to="/pets/">Pets</Link>

            <Route exact path="/clients/" component={Clients} />
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
