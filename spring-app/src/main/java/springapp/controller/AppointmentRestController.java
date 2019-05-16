package springapp.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import springapp.command.AppointmentCommand;
import springapp.domain.Appointment;
import springapp.service.AppointmentService;

/**
 * This controller handles all client related pages
 *
 * Notice the @PreAuthorize annotations on the methods
 */
@RestController
@RequestMapping("/api/appointments") //notice that this path is set at the class level.
public class AppointmentRestController {

    private Logger logger = LoggerFactory.getLogger(AppointmentRestController.class);

    // Inject in a AppointmentService class
	@Autowired

	AppointmentService appointmentService;

    /**
     * Returns the list of appointments
     * @return the list of appointments
     */
	 @PreAuthorize("hasAuthority('LIST_APPOINTMENTS')")
	 @GetMapping
	 public List<Appointment> listAppointments() {
        return appointmentService.getAppointments();
    }


    /**
     * @param id the id of the appointment to fetch
     * @return the appointment matching the id
     */
	 @PreAuthorize("hasAuthority('GET_APPOINTMENT')")
	 @GetMapping("/{id}")
	 public Appointment getAppointment(@PathVariable("id") int id) {
		return appointmentService.getAppointment(id);
	}

    /**
     * Saves a new appointment
     * @param command the information about the new appointment we are saving
     * @return the newly created appointment
     */
	 @PreAuthorize("hasAuthority('SAVE_CLIENT')")
	 @PostMapping
	 public Appointment newAppointment(@RequestBody AppointmentCommand command) {
		 
		 if(command.getId() != null) {
			 throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Cannot pass in an appointment id when creating a new appointment");
		 }
		 
	     //NOTE: if we want to capture errors correctly, we would wrap the following code in a try/catch
         // and the catch would add a nice error message to the mode
         // then the view template would render a nice error message

	     // we pass the command to the service, and it nows how update/create a client
         // the service returns the new client object back to us after the save
		 Appointment appointment = appointmentService.saveAppointment(command);
	     return appointment;

     }

	    /**
	     * Saves a new appointment
	     * @param command the information about the new client we are saving
	     * @return the newly created client
	     */
		 @PreAuthorize("hasAuthority('SAVE_APPOINTMENT')")
		 @PutMapping
		 public Appointment updateAppointment(@RequestBody AppointmentCommand command) {
			 
			 if(command.getId() == null) {
				 throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Cannot update an appointment without an id");
			 }
			 
		     //NOTE: if we want to capture errors correctly, we would wrap the following code in a try/catch
	         // and the catch would add a nice error message to the mode
	         // then the view template would render a nice error message

		     // we pass the command to the service, and it nows how update/create a client
	         // the service returns the new client object back to us after the save
			 Appointment appointment = appointmentService.saveAppointment(command);
		     return appointment;

	     }

	 
    /**
     * Deletes a appointment and redirects to list appointments page
     * @param id the id of the appointment to delete
     * @param redirectAttributes we use this instead of a Model object, because we want to pass
     *                           some attributes to the list page
     * @return redirect path to the list appointments page
     */
     @PreAuthorize("hasAuthority('DELETE_APPOINTMENT')")
	 @DeleteMapping("/{id}")
	 public Appointment deleteAppointment(@PathVariable("id") int id, RedirectAttributes redirectAttributes) {
         // NOTE to handle exceptions, we would wrap the following code in a try/catch
         // and in the catch forward to a different page
    	 
         // send the id passed in to the client service

         
         return appointmentService.deleteAppointment(id);

    }

}
