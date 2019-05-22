import React, { Component } from 'react'
import { Button, Table} from "reactstrap";

import DeletePetModal from "./DeletePetModal";


export default class PetsList extends Component {
  render() {
    console.log('Inside Pets List');
    return (
      <div>
          <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Owner</th>
              {/* how do you get the owner to populate */}
              <th>Fixed or nah</th>
            </tr>
          </thead>
          <tbody>

          {this.props.pets.map(pet => (
            <tr key={pet.id}>
              <td>{pet.id}</td>
              <td>{pet.name}</td>
              <td>{pet.gender}</td>
              <td>{pet.clientId}</td>
              <td>{pet.fixed === false ? 'No' : 'Yup'}</td>

              <td><Button color="info" >Edit</Button></td>
              <td><Button color="danger">Delete</Button></td>

              



              <td><Button color="success" href="/pets/edit">Edit</Button></td>
              <td><DeletePetModal buttonLabel='Delete' pet={pet} deletePet={this.props.deletePet} /></td>

              </tr>
          ))}
          </tbody>

          </Table>
      </div>
    )
  }
}
