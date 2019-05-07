import React, { Component } from 'react';
import './App.css';
import Clients from './containers/Clients';

import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    clients: []
  }

  render() {
    return (
      <main>
        <Clients />

      <BrowserRouter>
        <Link to="/clients/list">List</Link>
        <br />
        <Link to="/clients/">Clients</Link>
      
        <Route exact path="/clients/" component={Clients} />
      </BrowserRouter>

        
      </main>
    );
  }
}

export default App;
