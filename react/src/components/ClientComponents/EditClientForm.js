import React, { Component } from "react";
import {
  Row,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label
} from "reactstrap";
import editClient from "../../containers/Clients";

export default class EditClientForm extends Component {
  render() {
    console.log("Rendering EditClientForm");

    return (
      <div>
        <form edit-id={this.props.client.id} onSubmit={this.props.editClient}>
          <ModalBody>
          <FormGroup>
            <Label for="name"> Name </Label>
            <input type="text" className="form-control" id="name" name="name" />
          </FormGroup>

          <FormGroup>
            <Label for="address"> Address</Label>
            <input
              id="address"
              type="text"
              className="form-control"
              name="address"
              selected={this.props.client.address}
            />
          </FormGroup>

          <FormGroup>
            <Label for="phoneNumber"> Phone Number </Label>

            <input
              id="phoneNumber"
              type="tel"
              className="form-control"
              name="phoneNumber"
            />
          </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="success"
              type="submit"
              onClick={this.props.toggle}
            >
              Edit Client
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggle}>
              Cancel
            </Button>
            </ModalFooter>
        </form>
      </div>
    );
  }
}
