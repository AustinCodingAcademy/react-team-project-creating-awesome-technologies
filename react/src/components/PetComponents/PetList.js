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
          {this.props.pets.map(pet => (
            <tr key={pet.id}>
              <td>{pet.id}</td>
              <td>{pet.name}</td>
              <td>{pet.gender}</td>
              <td>{pet.fixed}</td>
              
              {/* <td><Button color="success" href="/clients/edit">Edit</Button></td>
              <td><AddPetModal buttonLabel ="Add Pet" client={client} deleteClient={this.props.deleteClient} /></td>
              <td><DeleteClientModal buttonLabel='Delete' client={client} deleteClient={this.props.deleteClient} /></td> */}
              </tr>
          ))}

          <tbody>

          </tbody>
          </Table>
        <ul>
          {this.props.pets.map(pet => <li key={pet.id}>{pet.name}</li>)}
        </ul>
      </div>
    )
  }
}
