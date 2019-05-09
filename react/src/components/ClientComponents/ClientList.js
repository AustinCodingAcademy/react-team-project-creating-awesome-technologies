import React, { Component } from "react";

import { Button, Table } from "reactstrap";

export default class ClientList extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>

          {this.props.clients.map(client => (
            <tr>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.phoneNumber}</td>
              <td>{client.address}</td>
              <td><Button color="success">Edit</Button></td>
              <td><Button color="danger">Delete</Button></td>


              </tr>
          ))}
          </tbody>

        </Table>
        <ul />
      </div>
    );
  }
}
