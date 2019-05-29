import React, { Component } from 'react';
import { Row, FormGroup, Button, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';


import DateTimePicker from 'react-datetime-picker';



export default class AddAppointmentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      value: new Date()
    };



    this.toggle = this.toggle.bind(this);
  }

  onChange = value => this.setState({ value })



  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

 


  render() {
    const { value } = this.state.value;
    return (
      <div>

      <Button color="info" onClick={this.toggle}>Edit Appointment</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.title}>
          <ModalHeader toggle={this.toggle}>Edit Appointment for {this.props.appointment.clientId}</ModalHeader>
          <ModalBody>
        
          <form onSubmit={this.props.editAppointment}>
          <FormGroup>
          <label for="clientId"> Client </label>
          <Input
                id="clientId"
                type="number"
                className="form-control"
                name="clientId"
                value={this.props.appointment.clientId}
                readOnly
              >
                
               
              </Input>
          </FormGroup>
          
          <FormGroup>
          <label for="petId"> Pet</label>

          <Input
                id="petId"
                type="number"
                className="form-control"
                name="petId"
                value={this.props.appointment.petId}
                readOnly
              >
               
              </Input>

          </FormGroup>

          <FormGroup>
          <label for="reason"> Reason</label>

          <Input
                id="reason"
                type="select"
                className="form-control"
                name="reason"
                value={this.props.appointment.reason}
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
              onChange={this.onChange}
              value={this.state.value}
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
              value={this.props.appointment.duration}
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
              value={this.props.appointment.comments}

            >
              </Input>
            </FormGroup>
          


          <hr />

          <div className="float-right"> 
            <Button color="success" onClick={this.props.toggle} type="submit" >Save Appointment</Button>{' '}
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
