import React, { Component } from 'react'
import { Button, Table} from "reactstrap";

import DeletePetModal from "./DeletePetModal";
import EditPetModal from "./EditPetModal";


export default class PetList extends Component {
 
  getClientName(clientId){
    // for(let k in this.props.clients){
    //   console.log(k.id);
    //   if(k.id === clientId){      
    //     return k.name;
    //   }
    // }
    let petClient = this.props.clients.find(function(e){return e.id === clientId;});
    for (let k in petClient){
      if(k === "name"){
        return petClient[k];
      }
    }
  }

  render() {
    console.log('Render Pets List');
    console.log(this.props.clients);
    console.log(this.props.pets);
    console.log('tried to render clients');


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
              <td>{this.getClientName(pet.clientId)}</td>        
              {/* <td>{this.props.clients.find(client => (client.id === pet.clientId)).name}</td> */}
              <td>{pet.fixed === false ? 'Nah' : 'Yurp'}</td>
              
              <td><EditPetModal title="EditPetModal" buttonLabel='Edit' pet={pet} editPet={this.props.editPet} clients={this.props.clients}/></td>
              <td><DeletePetModal title="DeletePetModal" buttonLabel='Delete' pet={pet} deletePet={this.props.deletePet} /></td>
              </tr>
          ))}
          
          </tbody>

          </Table>
      </div>
    )
  }
}
