import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddPetForm from "./AddPetForm";


class AddPetModal extends React.Component {
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
        <Button color="warning" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.title}>
          <ModalHeader toggle={this.toggle}>Adding a pet to {this.props.client.name}</ModalHeader>
          <ModalBody>
        
          <AddPetForm clientId={this.props.client.id} addPet={this.props.addPet} toggle={this.toggle} />

          </ModalBody>
          </Modal>

      </div>
    );
  }
}

export default AddPetModal;