import React, { Component } from "react";
import { FormGroup, Input, Button, Col, Label } from "reactstrap";

export default class AddPetForm extends Component {
  state = {
    clients: []
  };

  componentDidMount = async () => {
    const clientsResponse = await fetch("/api/clients");
    const clients = await clientsResponse.json();
    this.setState({ clients: clients });
  };

  render() {
    console.log("add pet form");

    return (
      <div>
        <form onSubmit={this.props.addPet}>
          <Input type="hidden" name="clientId" value={this.props.clientId} />

          <FormGroup>
            <Label for="name"> Name </Label>

            <Input type="text" className="form-control" id="name" name="name" />
          </FormGroup>

          <FormGroup>
            <Label for="gender"> Gender</Label>
            <Input
              id="gender"
              type="select"
              className="form-control"
              name="gender"
            >
              <option selected="selected">Male</option>
              <option>Female</option>
            </Input>
          </FormGroup>

          {this.props.fromPets ? (
            <FormGroup>
              <Label for="clients"> Clients</Label>

              <Input
                id="clients"
                type="select"
                className="form-control"
                name="clients"
              >
                {this.state.clients.map(client => (
                  <option value={client.name}>{client.name}</option>
                ))}
              </Input>
            </FormGroup>
          ) : (
            <span />
          )}

          <FormGroup check>
            <Label for="altered" check>
              <Input type="checkbox" id="altered" /> Altered?
            </Label>
          </FormGroup>
          <hr />

          <div className="float-right">
            <Button color="success" type="submit" onClick={this.props.toggle}>
              Add Pet
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggle}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
