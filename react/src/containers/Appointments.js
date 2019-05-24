import React, { Component } from 'react'
import AddAppointmentForm from '../components/AppointmentComponents/AddAppointmentForm';
import AppointmentList from '../components/AppointmentComponents/AppointmentList';

import PropogateLoader from 'react-spinners';


export default class Appointments extends Component {
state = {
  appointments: [],
  clients: [],
  pets:[],
  isLoading: true
}


componentDidMount = async () => {
  const appointmentsResponse = await fetch('/api/appointments');
  const appointments = await appointmentsResponse.json();
  console.log(appointments.length);
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
  await fetch('/api/appointments', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "petId": e.target.elements["petId"].value,
      "clientId" : e.target.elements["clientId"].value,
      "reason":e.target.elements["reason"].value,
      "dateTime":new Date().getTime(),
      "duration":e.target.elements["duration"].value,
      "comments":e.target.elements["comments"].value
    })
  });
  const response = await fetch('/api/appointments');
  const appointments = await response.json();
  
  this.setState({ appointments: appointments });

}  

deleteAppointment = async (e) => {

  e.preventDefault(); // Don't refresh the browser
  await fetch(`/api/appointments/${e.target.getAttribute('data-id')}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await fetch('/api/appointments');
  const appointments = await response.json();
  this.setState({ appointments: appointments });
}  

  render() {
    return (
      <div>
        <h1>Appointments</h1>

       {this.state.appointments.length != 0 ? (
         <div>
            <AddAppointmentForm pets={this.state.pets} clients={this.state.clients} title="appointmentAdd"  addAppointment = {this.addAppointment} />
            <AppointmentList appointments={this.state.appointments} deleteAppointment={this.deleteAppointment} /> 
         </div>
      
       )
        : (
        <div>
          <AddAppointmentForm pets={this.state.pets} clients={this.state.clients} title="appointmentAdd"  addAppointment = {this.addAppointment} />

          <div class="jumbotron"><h3>No appointments found</h3></div>
        </div>
          )
        }

        
      
      </div>
    )
  }
}
