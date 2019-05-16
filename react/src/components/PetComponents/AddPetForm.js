import React, { Component } from 'react'


export default class AddPetForm extends Component {
  render() {
    console.log("add pet form");

    return (
      <div>
        <form name=""  onSubmit={this.props.addPet}>
          <input type="number" readonly name="clientId" value={this.props.clientId}/>
          <label> Pet Name
            <input name="name" />
          </label>
          <label> Gender
            <input name="gender" />
          </label>
          <label> Fixed?
            <input type="checkbox" name="fixed" />
            <input type="submit" />

          </label>
        </form>
      </div>
    )
  }
}
