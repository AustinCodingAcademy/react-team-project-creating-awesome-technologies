import React, { Component } from 'react';

import { Button, Table} from "reactstrap";
import DeleteAppointmentModal from './DeleteAppointmentModal';
import EditAppointmentForm from './EditAppointmentForm';

import Moment from 'react-moment';

export default class AppointmentList extends Component {
  render() {
    return (
      <div>
        <Table className="table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Pet</th>
              <th>Client</th>
              <th>Reason</th>
              <th>Appointment Time</th>
              <th>Duration</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>

          {this.props.appointments.map(appointment => (
            
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.petId}</td>
              <td>{appointment.clientId}</td>
              <td>{appointment.reason}</td>
              
              <td><Moment format="MM-DD-YYYY hh:mm a">{appointment.time}</Moment></td>
              <td>{appointment.duration}</td>
              <td>{appointment.comments}</td>
              <td><EditAppointmentForm appointment={appointment} editAppointment={this.props.editAppointment} title="EditAppointmentForm"/></td>
              <td><DeleteAppointmentModal appointment={appointment} deleteAppointment={this.props.deleteAppointment} title="DeleteModalFromAppointment"/></td>
             
            </tr>
          ))}
          </tbody>

        </Table>
        <ul />

      </div>
    );
  }
}
