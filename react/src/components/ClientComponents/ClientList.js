<<<<<<< Updated upstream
import React, { Component } from 'react'

=======

import React, { Component } from 'react'
import AddPetForm from '../PetComponents/AddPetForm';
import { NavLink } from 'react-router-dom'
>>>>>>> Stashed changes


export default class ClientList extends Component {
  render() {
    return (
      <div>

<<<<<<< Updated upstream
        <ul>
          {this.props.clients.map(client => <li key={client.id}>{client.name}</li>)}
        </ul>
        
=======
        </Table>
        <ul />

>>>>>>> Stashed changes
      </div>
    )
  }
}
