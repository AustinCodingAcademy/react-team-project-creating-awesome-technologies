import React, { Component } from 'react'
import AddAppointmentForm from '../components/AppointmentComponents/AddAppointmentForm';


export default class Appointments extends Component {
state = {
  appointments: [],
  clients: [],
  pets:[]
}


componentDidMount = async () => {
  const appointmentsResponse = await fetch('/api/appointments');
  const appointments = await appointmentsResponse.json();
  this.setState({ appointments: appointments });

  const petsResponse = await fetch('/api/pets');
  const pets = await petsResponse.json();
  this.setState({ pets: pets });

  const clientsResponse = await fetch('/api/clients');
  const clients = await clientsResponse.json();
  this.setState({ clients: clients });
}

addAppointment = async (e) => {
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
        <h1>Appointments</h1>
        <AddAppointmentForm pets={this.state.pets} clients={this.state.clients} addAppointment = {this.addAppointment} />

        
      
      </div>
    )
  }
}
