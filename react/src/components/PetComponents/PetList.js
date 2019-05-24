import React, { Component } from 'react'
import { Button, Table} from "reactstrap";

import DeletePetModal from "./DeletePetModal";


export default class PetList extends Component {
  render() {
    console.log('Inside Pets List');
    return (
      <div>
          <Table className="table-striped">
          <thead>
            <tr>
              <th>#</th>
              {/* <th>Owner</th> */}
              {/* how do you get the owner to populate */}
              <th>Name</th>
              <th>Gender</th>
              <th>Fixed or nah</th>
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
              <td>{pet.fixed}</td>

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
