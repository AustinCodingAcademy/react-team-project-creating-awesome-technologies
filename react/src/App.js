import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    clients: []
  }

  componentDidMount = () => {
    this.fetchClients();
  }

  fetchClients = async () => {
    const response = await fetch('/api/clients');
    const clients = await response.json();
    this.setState({ clients: clients });
  }

  addClient = async (e) => {
    e.preventDefault(); // Don't refresh the browser
    await fetch('/api/clients', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": e.target.elements["name"].value,
        "address" : e.target.elements["address"].value,
        "phoneNumber":e.target.elements["phoneNumber"].value
      })
    });
    this.fetchClients();
  }

  render = () => {
    return (
      <div>
        <h1>Clients</h1>
        <form onSubmit={this.addClient}>
          <label>
            name
            <input name="name" />
          </label>
          <label>
            address
            <input name="address" />
          </label>
          <label>
            phone number
            <input name="phoneNumber" />
          </label>
          <input type="submit"></input>
        </form>
        <table className="pure-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
              {this.state.clients.map(client => <tr> <td key={client.id}>{client.id}</td> <td>{client.name}</td> <td>{client.address}</td> <td>{client.phoneNumber}</td></tr>)}
          </tbody>

        </table>

      </div>
    )
  }
}

export default App;
