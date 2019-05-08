import React, { Component } from 'react';

import AddClientForm from '../components/ClientComponents/AddClientForm';
import ClientList from '../components/ClientComponents/ClientList';

export default class Clients extends Component {
state = {
  clients: []
}


componentDidMount = async () => {
  const response = await fetch('/api/clients');
  const clients = await response.json();
  this.setState({ clients: clients });
}

  addClient = async (e) => {
    e.preventDefault(); // Don't refresh the browser
    await fetch('/api/clients', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": e.target.elements["name"].value,
        "address" : e.target.elements["address"].value,
        "phoneNumber":e.target.elements["phoneNumber"].value
      })
    });
    const response = await fetch('/api/clients');
    const clients = await response.json();
    this.setState({ clients: clients });

  }
  render() {
    return (
      <div>
        <h1>Clients</h1>
        {/* <AddClientForm addClient = {this.addClient} /> */}
        <ClientList clients={this.state.clients} />
         
      </div>
    )
  }
}
