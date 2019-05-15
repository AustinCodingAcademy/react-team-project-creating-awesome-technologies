import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddPetForm from "./AddPetForm";

class ModalExample extends React.Component {
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
    console.log('inside add Pet modal') 
    console.log(this.props.client.id) 
    return (
      <div>
        <Button color="warning" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Adding a pet to {this.props.client.name}</ModalHeader>
          <ModalBody>
            <AddPetForm addPets = {this.addPets} />;
          </ModalBody>
          <ModalFooter>
            <Button color="warning" data-id={this.props.client.id} onClick={this.props.addPets}>Add Pet</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;