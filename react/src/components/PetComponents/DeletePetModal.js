import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DeletePetModal extends React.Component {
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
    console.log('render delete pet modal') 
    console.log(this.props.pet.id) 
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Are you sure you want to remove{this.props.pet.name}?</ModalHeader>
          <ModalBody>
            If you for sure for sure want to remove this cute little pet then go ahead.. but God will judge you!
          </ModalBody>
          <ModalFooter>
            <Button color="danger" data-id={this.props.pet.id} onClick={this.props.deletePet}>Delete Pet :(</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeletePetModal;