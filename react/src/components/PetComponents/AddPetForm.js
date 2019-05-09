import React, { Component } from 'react'


export default class AddPetForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.addPet}>
          <label> Pet Name
            <input name="name" />
          </label>
          <label> Gender
            <input name="gender" />
          </label>
          <label> Fixed?
            <input type="checkbox" name="fixed" />
          </label>
          <input type="submit" />
        </form>
      </div>
    )
  }
}
