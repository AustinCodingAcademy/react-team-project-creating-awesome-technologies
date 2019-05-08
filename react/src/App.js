import React, { Component } from "react";
import "./App.css";
import Clients from "./containers/Clients";
import Header from "./containers/Header";

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
            <Link to="/clients">Clients</Link>
            <br />
            <Route exact path="/clients/" component={Clients} />
          </BrowserRouter>
        </Container>
      </main>
    );
  }
}

export default App;
