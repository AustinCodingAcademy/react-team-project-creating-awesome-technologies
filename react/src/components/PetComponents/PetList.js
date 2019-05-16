import React, { Component } from 'react'
import { Button, Table} from "reactstrap";

export default class PetsList extends Component {
  render() {
    return (
      <div>
          <Table>
          <thead>
            <tr>
              <th>#</th>
              {/* <th>Owner</th> */}
              {/* how do you get the owner to populate */}
              <th>Name</th>
              <th>Gender</th>
              <th>Fixed or nah</th>
            </tr>
          </thead>
          <tbody>

          {this.props.pets.map(pet => (
            <tr key={pet.id}>
              <td>{pet.id}</td>
              <td>{pet.name}</td>
              <td>{pet.gender}</td>
              <td>{pet.fixed}</td>
            </tr>
          ))}
          </tbody>

          </Table>
      </div>
    )
  }
}
