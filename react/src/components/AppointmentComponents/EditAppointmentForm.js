import React, { Component } from "react";
import {
  Row,
  FormGroup,
  Button,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import DateTimePicker from "react-datetime-picker";

export default class AddAppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      value: new Date()
    };

    this.toggle = this.toggle.bind(this);
  }

  onChange = value => this.setState({ value });

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>
          Edit
        </Button>
        <Modal
          name="editApptModal"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.title}
        >
          <ModalHeader toggle={this.toggle}>
            Edit Appointment for {this.props.appointment.clientId}
          </ModalHeader>

          <form edit-id={this.props.appointment.id} onSubmit={this.props.editAppointment}>
            <ModalBody>
              <FormGroup>
                <Label for="clientId"> Client </Label>
                <Input
                  id="clientId"
                  type="number"
                  className="form-control"
                  name="clientId"
                  value={this.props.appointment.clientId}
                  readOnly
                />
              </FormGroup>

              <FormGroup>
                <Label for="petId"> Pet</Label>
                <Input
                  id="petId"
                  type="number"
                  className="form-control"
                  name="petId"
                  value={this.props.appointment.petId}
                  readOnly
                />
              </FormGroup>

              <FormGroup>
                <Label for="reason"> Reason</Label>

                <Input
                  id="reason"
                  type="select"
                  className="form-control"
                  name="reason"
                  //value={this.props.appointment.reason}
                >
                  {/* <option selected="selected">{this.props.appointment.reason}</option> */}
                  <option value="Sick">Sick</option>
                  <option value="Checkup">Checkup</option>
                  <option value="Emergency">Emergency</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="dateTime"> Date / Time </Label>
                <DateTimePicker
                    id="dateTime"
                    name="dateTime"
                    className="form-control"
                    onChange={this.onChange}
                    value={this.state.value}
                  />
              </FormGroup>

              <FormGroup>
                <Label for="duration"> duration </Label>
                <Input
                  id="duration"
                  type="number"
                  className="form-control"
                  name="duration"
                  //value={this.props.appointment.duration}
                />
              </FormGroup>

              <FormGroup>
                <Label for="comments"> Comments </Label>
                <Input
                  id="comments"
                  type="text"
                  className="form-control"
                  name="comments"
                  //value={this.props.appointment.comments}
                />
              </FormGroup>              
            </ModalBody>

            <ModalFooter>
                <Button
                  color="success"
                  onClick={this.toggle}
                  type="submit"
                >
                  Save Appointment
                </Button>{" "}            

              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}
