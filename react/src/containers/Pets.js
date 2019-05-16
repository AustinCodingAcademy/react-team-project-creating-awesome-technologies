import React, { Component } from 'react'
import AddPetForm from '../components/PetComponents/AddPetForm';
import PetsList from '../components/PetComponents/PetList';

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
      'clientId': 18,
      'name': e.target.elements["name"].value,
      'gender': e.target.elements["gender"].value
    })
  });
  const response = await fetch('/api/pets');
  const pets = await response.json();
  this.setState({ pets: pets });
}

deletePet = async (e) => {
  console.log('INSIDE DELETE PET');
  console.log(e.target.getAttribute('data-id') + 'pet id');

  e.preventDefault(); // Don't refresh the browser
  await fetch(`/api/pets/${e.target.getAttribute('data-id')}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await fetch('/api/pets');
  const pets = await response.json();
  this.setState({ pets: pets });
}  

render() {
  return (
    <div>
      <h1>Pets</h1>
      <AddPetForm addPet = {this.addPet} />
      <PetsList pets={this.state.pets} deletePet = {this.deletePet}/>
       
    </div>
  )
}



}
