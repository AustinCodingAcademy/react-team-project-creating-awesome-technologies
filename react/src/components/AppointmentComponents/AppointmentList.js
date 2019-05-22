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
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>

          {this.props.appointments.map(client => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.phoneNumber}</td>
              <td>{client.address}</td>
              
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
