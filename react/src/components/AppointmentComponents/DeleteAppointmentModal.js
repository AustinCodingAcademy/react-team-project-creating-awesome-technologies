import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

class DeleteAppointmentModal extends React.Component {
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
        <Button color="info" onClick={this.toggle}>Delete</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.title}>
          <ModalHeader toggle={this.toggle}>Are you sure you want to delete {this.props.appointment.name}?</ModalHeader>
          <ModalBody>
            If you for sure for sure want to delete this appointment, then go ahead... i guess
          </ModalBody>
          <ModalFooter>
            <Button color="danger" data-id={this.props.appointment.id} onClick={this.props.deleteAppointment}>DELETE ME FAM</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteAppointmentModal;