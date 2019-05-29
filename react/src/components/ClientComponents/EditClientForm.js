import React, { Component } from 'react';
import { Row, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import editClient from "../../containers/Clients";


export default class EditClientForm extends Component {



  render() {
    console.log('Rendering EditClientForm')


    return (   
      <div>


          {/* <form onSubmit={this.props.editClient}> */}
<form>
          <FormGroup>
          <label for="name"> Name </label>

            <input type="text" className="form-control" id="name" name="name" />
          </FormGroup>
          
          <FormGroup>
          <label for="address"> Address</label>
            <input id="address"  type="text" className="form-control" name="address" />
          </FormGroup>

          <FormGroup>
          <label for="phoneNumber"> Phone Number </label>

            <input id="phoneNumber" type="tel" className="form-control" name="phoneNumber" />
          </FormGroup>
          <hr />

          <div className="float-right"> 
            <Button color="success" type="submit" onClick={this.props.editClient}>Edit Client</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </div>

          
        </form>


</div>

      
    )
  }
}
