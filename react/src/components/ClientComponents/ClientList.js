import React, { Component } from 'react'



export default class ClientList extends Component {
  render() {
    return (
      <div>

        <ul>
          {this.props.clients.map(client => <li key={client.id}>{client.name}</li>)}
        </ul>
        
      </div>
    )
  }
}
