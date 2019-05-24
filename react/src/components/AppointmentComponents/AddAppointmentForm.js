import React, { Component } from 'react';
import { Row, FormGroup, Button, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';


import DateTimePicker from 'react-datetime-picker';



export default class AddAppointmentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      date: new Date()
    };



    this.toggle = this.toggle.bind(this);
  }

  onDateTimeChange = date => this.setState({ date })


  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

 


  render() {
    return (
      <div>

      <Button color="success" onClick={this.toggle}>Add a new appointment</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.title}>
          <ModalHeader toggle={this.toggle}>Create a new appointment</ModalHeader>
          <ModalBody>
        
          <form onSubmit={this.props.addAppointment}>
          <FormGroup>
          <label for="clientId"> Client </label>
          <Input
                id="clientId"
                type="select"
                className="form-control"
                name="clientId"
              >
                {this.props.clients.map(client => (
                  <option value={client.id}>{client.name}</option>
                ))}
              </Input>
          </FormGroup>
          
          <FormGroup>
          <label for="petId"> Pet</label>

          <Input
                id="petId"
                type="select"
                className="form-control"
                name="petId"
              >
                {this.props.pets.map(pet => (
                  <option value={pet.name}>{pet.name}</option>
                ))}
              </Input>

          </FormGroup>

          <FormGroup>
          <label for="reason"> Reason</label>

          <Input
                id="reason"
                type="select"
                className="form-control"
                name="reason"
              >               
              <option value="Sick">Sick</option>
              <option value="Checkup">Checkup</option>
              <option value="Emergency">Emergency</option>

              </Input>

          </FormGroup>

          <FormGroup>
            <label for="dateTime"> Date / Time </label>
              <div>
            <DateTimePicker
              id="dateTime"
              name="dateTime"
              className="form-control"
              onChange={this.onDateTimeChange}
              value={this.state.date}
            />
            </div>
          </FormGroup>

          <FormGroup>
            <label for="duration"> duration </label>
            <Input 
              id="duration"
              type="number"
              className="form-control"
              name="duration"
            >
              </Input>
            </FormGroup>

            <FormGroup>
            <label for="comments"> Comments </label>
            <Input 
              id="comments"
              type="text"
              className="form-control"
              name="comments"
            >
              </Input>
            </FormGroup>
          


          <hr />

          <div className="float-right"> 
            <Button color="success" type="submit" >Add Appointment</Button>{' '}
          </div>

          <Button color="secondary" onClick={this.props.toggle}>
              Cancel
            </Button>

          
        </form>

          </ModalBody>
          </Modal>

        
        
      </div>
    )
  }
}
