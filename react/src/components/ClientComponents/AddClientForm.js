import React, { Component } from 'react';
import { Row, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



export default class AddClientForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


  render() {
    return (
      <div>

<Button color="success" onClick={this.toggle}>{this.props.buttonLabel} Add Client</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Adding a new Client</ModalHeader>
          <ModalBody>
        

          <form onSubmit={this.props.addClient}>
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
            <Button color="success" type="submit" onClick={this.toggle}>Add Client</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </div>

          
        </form>
          </ModalBody>
          
        </Modal>



      </div>
    )
  }
}
