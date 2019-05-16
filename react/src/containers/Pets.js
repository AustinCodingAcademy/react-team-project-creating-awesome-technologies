import React, { Component } from 'react'
import AddPetForm from '../components/PetComponents/AddPetForm';
import PetsList from '../components/PetComponents/PetList';
import {Col, Row, Container} from "reactstrap";

export default class Pets extends Component {
state = {
  pets: []

}



componentDidMount = async () => {
  const response = await fetch('/api/pets');
  const pets = await response.json();
  this.setState({ pets: pets });
}

addPet = async (e) => {
  e.preventDefault(); // Don't refresh the browser
  await fetch('/api/pets', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "clientId":null,
      "name": e.target.elements["name"].value,
      "gender": e.target.elements["gender"].value,
      "altered":e.target.elements["altered"].checked,
    })
  });
  const response = await fetch('/api/pets');
  const pets = await response.json();
  this.setState({ pets: pets });
}

deletePet = async (e) => {
  console.log('INSIDE DELETE CLIENT');
  console.log(e.target.getAttribute('data-id'));

  e.preventDefault(); // Don't refresh the browser
  await fetch(`/api/clients/${e.target.getAttribute('data-id')}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await fetch('/api/clients');
  const clients = await response.json();
  this.setState({ clients: clients });

}  



render() {
  return (
    
    <div>
      <h1>Pets</h1>
      <Row>
      <Col md={8}>
      <PetsList pets={this.state.pets} />
      </Col>
      <Col md={2} className="addNewPet">
      <h4>Add a new Pet</h4>
      <AddPetForm addPet = {this.addPet} />
      </Col>
      </Row>
      

      
       
    </div>
  )
}



}
