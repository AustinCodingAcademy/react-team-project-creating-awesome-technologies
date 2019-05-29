// import React, { Component } from 'react'

// import BigCalendar from 'react-big-calendar'
// import moment from 'moment'

// import dates from '../../utils/date'

// const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])


// const ColoredDateCellWrapper = ({ children }) =>
//   React.cloneElement(React.Children.only(children), {
//     style: {
//       backgroundColor: 'lightblue',
//     },
//   })

//   let events = [{
//     id: 0,
//     title: '',
//     allDay: true,
//     start: '',
//     end: '',
//   }]

//   this.props.appointments.map(appointment => (
//     events = [
//       ...events,
//       {
//         id: appointment.id,
//         title: "test",
//         allDay: true,
//         start: '',
//         end:''
//       }
//     ]
//    // events[appointment.id] = {id: appointment.id, title: appointment.comments}
//   ))

// const MyCalendar = props => (
//   <div>
//     <BigCalendar
//     events={events}
//     views={allViews}
//     defaultView={BigCalendar.Views.WORK_WEEK}
//     step={60}
//     defaultDate={new Date()}
//     localizer={localizer}
//   />
//   </div>
// )



// export default class AppointmentsCalendarView extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false,
//       value: new Date()
//     };
//   }


//   render() {
//     return (
//       <div>

// <MyCalendar 
// />

        
        
//       </div>
//     )
//   }
// }
