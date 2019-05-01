import React, { Component } from 'react'


export default class AddClientForm extends Component {
  render() {
    return (
      <div>

<form onSubmit={this.props.addClient}>
          <label> Name
            <input name="name" />
          </label>
          <label> Address
            <input name="address" />
          </label>
          <label> Phone Number
            <input name="phoneNumber" />
          </label>
          <input type="submit" />
        </form>
        
      </div>
    )
  }
}
