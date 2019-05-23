import React from 'react';
import { Button, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EditPetModal extends React.Component {
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
    console.log('render edit pet modal') 
    console.log('pet list clients: ' + this.props.clients) 
    console.log('pet id: ' + this.props.pet.id) 

    return (
      <div>
        <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.title}>
          <ModalHeader toggle={this.toggle}>Edit the info for {this.props.pet.name}?</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name"> Name </Label>
              <Input type="text" className="form-control" id="name" name="name" />
            </FormGroup>

            <FormGroup>
              <Label for="gender"> Gender</Label>
              <Input id="gender" type="select" className="form-control" name="gender">
                <option selected="selected">Male</option>
                <option>Female</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="clients"> Clients</Label>
              <Input id="clientId" type="select" className="form-control" name="clients">
                {this.props.clients.map(client => (
                  <option value={client.id}>{client.name}</option>
                ))}
              </Input>
            </FormGroup>

            <FormGroup check>
              <Label for="altered" check>
                <Input type="checkbox" id="altered" /> Altered?
              </Label>
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button color="info" data-id={this.props.pet.id} onClick={this.props.editPet}>Update Pet</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditPetModal;   //What does this do again? is it necessary?