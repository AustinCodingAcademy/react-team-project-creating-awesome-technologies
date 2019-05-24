import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

class DeleteClientModal extends React.Component {
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
    console.log(this.className + "from Delete Client Modal");
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.title}>
          <ModalHeader toggle={this.toggle}>Are you sure you want to delete {this.props.client.name}?</ModalHeader>
          <ModalBody>
            If you for sure for sure want to delete this client, then go ahead... i guess
          </ModalBody>
          <ModalFooter>
            <Button color="danger" data-id={this.props.client.id} onClick={this.props.deleteClient}>DELETE ME FAM</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteClientModal;