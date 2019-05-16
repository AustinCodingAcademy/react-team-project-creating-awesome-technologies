import React, { Component } from 'react'
import AddPetForm from '../components/PetComponents/AddPetForm';
import PetsList from '../components/PetComponents/PetList';

export default class Pets extends Component {
state = {
  pets: []

}

componentDidMount = async () => {
  const response = await fetch('/api/clients');
  const clients = await response.json();
  this.setState({ clients: clients });
}

addPet = async (e) => {
  e.preventDefault(); // Don't refresh the browser
  await fetch('/api/pets', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": e.target.elements["name"].value,
      "gender": e.target.elements["gender"].value,
      "fixed":e.target.elements["fixed"].value
    })
  });
  const response = await fetch('/api/pets');
  const pets = await response.json();
  this.setState({ pets: pets });
}
addPetWithClient= async (e) => {
  e.preventDefault(); // Don't refresh the browser
  await fetch('/api/pets', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": e.target.elements["name"].value,
      "gender": e.target.elements["gender"].value,
      "fixed":e.target.elements["fixed"].value,
      "id":e.target.elements["data-id"].value
    })
  });
  const response = await fetch('/api/pets');
  const pets = await response.json();
  this.setState({ pets: pets });
}
render() {
  return (
    <div>
      <h1>Pets</h1>
      <AddPetForm addPets = {this.addPets} />
      <PetsList pets={this.state.pets} />
       
    </div>
  )
}



}
