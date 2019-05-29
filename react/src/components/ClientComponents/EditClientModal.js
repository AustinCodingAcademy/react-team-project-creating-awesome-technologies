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
    console.log(this.props.className + "from Edit Client Modal");

    return (
      <div>
        <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.title}>
          <ModalHeader toggle={this.toggle}>Editing {this.props.client.name}</ModalHeader>
          <ModalBody>
        
          <EditClientForm client={this.props.client} editClient={this.props.editClient} toggle={this.toggle} />

          </ModalBody>
          </Modal>

      </div>
    );
  }
}

export default EditClientModal;