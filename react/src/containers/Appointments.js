import React, { Component } from 'react'
import AddAppointmentForm from '../components/AppointmentComponents/AddAppointmentForm';


export default class Appointments extends Component {
state = {
  appointments: []
}


componentDidMount = async () => {
  const response = await fetch('/api/appointments');
  const appointments = await response.json();
  this.setState({ appointments: appointments });
}
  

  render() {
    return (
      <div>
        <h1>Appointments</h1>
        <AddAppointmentForm addAppointment = {this.addAppointment} />

        
      
      </div>
    )
  }
}
