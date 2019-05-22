import React, { Component } from 'react';
import { Row, FormGroup, Button, Input } from 'reactstrap';
import myEventsList from './events.js';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

const MyCalendar = props => (
  <div>
    <BigCalendar
      defaultView={BigCalendar.Views.WORK_WEEK}
       views={['work_week','month']}
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)

export default class AddAppointmentForm extends Component {

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

        {/* <MyCalendar /> */}

        {/* <form onSubmit={this.props.addAppointment}>
          <FormGroup>
          <label for="name"> Name </label>
          <Input
                id="clients"
                type="select"
                className="form-control"
                name="clients"
              >
                {this.props.clients.map(client => (
                  <option value={client.name}>{client.name}</option>
                ))}
              </Input>
          </FormGroup>
          
          <FormGroup>
          <label for="address"> Address</label>

          </FormGroup>

          <FormGroup>
          <label for="phoneNumber"> Phone Number </label>

          </FormGroup>
          <hr />

          <div className="float-right"> 
            <Button color="success" type="submit" >Add Appointment</Button>{' '}
          </div>

          
        </form>
         */}
      </div>
    )
  }
}
