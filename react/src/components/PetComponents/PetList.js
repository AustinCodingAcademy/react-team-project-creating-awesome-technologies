import React, { Component } from 'react'
import { Button, Table} from "reactstrap";

import DeletePetModal from "./DeletePetModal";
import EditPetModal from "./EditPetModal";



export default class PetList extends Component {
  render() {
    console.log('Inside Pets List');
    return (
      <div>
          <Table className="table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Owner</th>
              <th>Fixed or Nah?</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          {this.props.pets.map(pet => (
            <tr key={pet.id}>
              <td>{pet.id}</td>
              <td>{pet.name}</td>
              <td>{pet.gender}</td>
              <td>{pet.clientId}</td>
              <td>{pet.altered === false ? 'Nah' : 'Yurp'}</td>

              <td><EditPetModal buttonLabel='Edit' pet={pet} edit={this.props.editPet} clients={this.props.clients}/></td>
              <td><DeletePetModal buttonLabel='Delete' pet={pet} deletePet={this.props.deletePet} /></td>
              </tr>
          ))}

          </tbody>

          </Table>
      </div>
    )
  }
}
