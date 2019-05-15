import React, { Component } from 'react'


export default class AddPetForm extends Component {
  render() {
    console.log("add pet form");

    return (
      <div>
        <form name=""  onSubmit={() => this.savePet}>
          <input type="number" name="clientId"/>
          <label> Pet Name
            <input name="name" />
          </label>
          <label> Gender
            <input name="gender" />
          </label>
          <label> Fixed?
            <input type="checkbox" name="fixed" />
          </label>
        </form>
      </div>
    )
  }
}
