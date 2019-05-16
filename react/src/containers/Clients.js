import React, { Component } from 'react'

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

  deleteClient = async (e) => {
    console.log('INSIDE DELETE CLIENT');
    console.log(e.target.getAttribute('data-id'));

    e.preventDefault(); // Don't refresh the browser
    await fetch(`/api/clients/${e.target.getAttribute('data-id')}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const response = await fetch('/api/clients');
    const clients = await response.json();
    this.setState({ clients: clients });
  }  


  addPet = async (e) => {
    e.preventDefault(); // Don't refresh the browser
    await fetch('/api/pets', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": e.target.elements["name"].value,
        "gender": e.target.elements["gender"].value,
        "fixed":e.target.elements["fixed"].value,
        "clientID":e.target.elements["clientID"].value
      })
    });
    console.log("working");
        const response = await fetch('/api/pets');
    const pets = await response.json();
    this.setState({ pets: pets });
  
  }

  addPetWithClient= async (e) => {
    e.preventDefault(); // Don't refresh the browser
    await fetch('/api/pets', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": e.target.elements["name"].value,
        "gender": e.target.elements["gender"].value,
        "fixed":e.target.elements["fixed"].value,
        "id":e.target.elements["clientID"].value
      })
    });
    const response = await fetch('/api/pets');
    const pets = await response.json();
    this.setState({ pets: pets });
  }

  render() {
    console.log("inside Clients.js render")
    return (
      <div>
        <h1>Clients</h1>
        <AddClientForm addClient = {this.addClient} />
        <ClientList clients={this.state.clients} deleteClient = {this.deleteClient} />         
      </div>
    )
  }
}
