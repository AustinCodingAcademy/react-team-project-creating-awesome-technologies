import React, { Component } from 'react'
import { Button, Table} from "reactstrap";

export default class PetsList extends Component {
  render() {
    console.log('TRYING TO POPULATE THE PETS LIST');
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
          {this.props.pets.map(pet => (
            <tr key={pet.id}>
              <td>{pet.id}</td>
              <td>{pet.name}</td>
              <td>{pet.gender}</td>
              <td>{pet.fixed}</td>
              
              {
              <td><Button color="success" >Edit</Button></td>
              }
              </tr>
          ))}

          <tbody>

          </tbody>
          </Table>
        {/* <ul>
          {this.props.pets.map(pet => <li key={pet.id}>{pet.name}</li>)}
        </ul> */}
      </div>
    )
  }
}
