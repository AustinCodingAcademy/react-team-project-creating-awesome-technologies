
import React, { Component } from 'react'

import { Button, Table} from "reactstrap";
import DeleteClientModal from "./DeleteClientModal";
import AddPetModal from "../PetComponents/AddPetModal";
import EditClientModal from "./EditClientModal";

export default class ClientList extends Component {

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

          {this.props.clients.map(client => {
            return (<tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.phoneNumber}</td>
              <td>{client.address}</td>
              
              <td><EditClientModal title="EditButton" buttonLabel="Edit" client={client} editClient={this.props.editClient} /></td>
              <td><AddPetModal buttonLabel ="Add Pet" client={client} addPet={this.props.addPet}/></td>
              <td><DeleteClientModal title="DeleteButton" buttonLabel='Delete' client={client} deleteClient={this.props.deleteClient} /></td>
              </tr>
            )})}
          </tbody>

        </Table>

      </div>
    );
  }
}
