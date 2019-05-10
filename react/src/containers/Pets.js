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
      <AddPetForm addPets = {this.addClient} />
      <PetsList pets={this.state.pets} />
       
    </div>
  )
}



}
