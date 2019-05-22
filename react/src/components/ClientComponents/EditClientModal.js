import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditClientForm from "./EditClientForm";


class EditClientModal extends React.Component {
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
        <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Need to update this header {this.props.client.name}</ModalHeader>
          <ModalBody>
        
          <EditClientForm clientId={this.props.client.id} addPet={this.props.addPet} toggle={this.toggle} />

          </ModalBody>
          </Modal>

      </div>
    );
  }
}

export default EditClientModal;