import React, { Component } from 'react'

import BigCalendar from 'react-big-calendar'
import moment from 'moment'

const localizer = BigCalendar.momentLocalizer(moment)




export default class AppointmentsCalendarView extends Component {

  state = {
    events: 
      {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2015, 3, 0),
        end: new Date(2015, 3, 1),
      },
    
  }

  render() {
    return (
      <div>

<BigCalendar
    views={BigCalendar.Views.WORK_WEEK}
    events={this.state.events} />

        
        
      </div>
    )
  }
}
