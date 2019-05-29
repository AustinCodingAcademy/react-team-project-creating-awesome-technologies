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

  editClient = async (e) => {
    debugger
    e.preventDefault(); // Don't refresh the browser
    console.log('inside editClient from Clients.js')
    // console logs were messing it up
    // console.log(e.target.elements["name"].value);
    // console.log('client id plz' + e.target.getAttribute('data-id'));


    await fetch(('/api/clients', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": e.target.getAttribute('data-id'),
        "name": e.target.elements["name"].value,
        "address" : e.target.elements["address"].value,
        "phoneNumber":e.target.elements["phoneNumber"].value
      })
    }));
    const response = await fetch('/api/clients');
    const clients = await response.json();
    this.setState({ clients: clients });
  }
  
  deleteClient = async (e) => {
    console.log('INSIDE DELETE CLIENT from Clients.js');
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
    console.log("FROM CLIENTSJS.");
    await fetch('/api/pets', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "clientId":e.target.elements["clientId"].value,
        "name": e.target.elements["name"].value,
        "gender": e.target.elements["gender"].value,
        "altered":e.target.elements["altered"].checked,
      })
    });
    console.log("working");
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
      
        <ClientList clients={this.state.clients} addPet={this.addPet} deleteClient = {this.deleteClient} editClient={this.editClient}/>         

      </div>
    )
  }
}
