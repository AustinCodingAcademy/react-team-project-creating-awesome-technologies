import React, { Component } from "react";

import BigCalendar from "react-big-calendar";
import moment, { duration } from "moment";

import dates from "../../utils/date";

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue"
    }
  });
const events = [];

const MyCalendar = props => (
  <div>
    <BigCalendar
      events={events}
      views={allViews}
      defaultView={BigCalendar.Views.WORK_WEEK}
      step={60}
      defaultDate={new Date()}
      localizer={localizer}
    />
  </div>
);

export default class AppointmentsCalendarView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       

{this.props.appointments.map(appointment => (  
  
  events.push({
    id: events.length++,
    title: appointment.comments,
    allDay: false,
    start:new Date(Date.parse(appointment.time)),
    end: new Date(new Date(Date.parse(appointment.time)).setHours(appointment.dura))
  })
)

)}

for (const [key, value] of appointments.entries()) {
    events.push()
  }

          
{        
  console.log(events)
}

        <MyCalendar 
        />
      </div>
    );
  }
}
