import React, { Component } from 'react';

import { Button, Table} from "reactstrap";

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
              <td>{appointment.pet_id}</td>
              <td>{appointment.client_id}</td>
              <td>{appointment.appt_time}</td>
              <td>{appointment.duration}</td>
              <td>{appointment.comments}</td>

              
              <td><Button color="success" href="/appointments/edit">Edit</Button></td>
              <td><Button color="danger" href="/appointments/delete">Delete</Button></td>
             
              </tr>
          ))}
          </tbody>

        </Table>
        <ul />

      </div>
    );
  }
}
