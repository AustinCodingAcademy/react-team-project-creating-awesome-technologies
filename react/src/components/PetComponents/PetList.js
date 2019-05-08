import React, { Component } from 'react'



export default class PetsList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.pets.map(pet => <li key={pet.id}>{pet.name}</li>)}
        </ul>
      </div>
    )
  }
}
