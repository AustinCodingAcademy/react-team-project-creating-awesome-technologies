
import React, { Component } from 'react'

import { Button, Table} from "reactstrap";
import DeleteClientModal from "./DeleteClientModal";
import AddPetModal from "../PetComponents/AddPetModal";

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
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.phoneNumber}</td>
              <td>{client.address}</td>
              
              <td><Button color="success" href="/clients/edit">Edit</Button></td>
              <td><AddPetModal buttonLabel ="Add Pet" client={client} addPet={this.props.addPet}/></td>
              <td><DeleteClientModal buttonLabel='Delete' client={client} deleteClient={this.props.deleteClient} /></td>
              </tr>
          ))}
          </tbody>

        </Table>
        <ul />

      </div>
    );
  }
}
