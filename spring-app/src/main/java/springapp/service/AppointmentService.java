package springapp.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.qos.logback.classic.Logger;
import springapp.command.AppointmentCommand;
import springapp.command.PetCommand;
import springapp.dao.AppointmentDao;
import springapp.dao.ClientDao;
import springapp.dao.PetDao;
import springapp.domain.Appointment;
import springapp.domain.Client;
import springapp.domain.Pet;


@Service
public class AppointmentService {

	@Autowired
	AppointmentDao appointmentDao;

	@Autowired 
	PetDao petDao;

	public Appointment getReason(String id) {
		return appointmentDao.get(Integer.parseInt(id));
	}

	public Appointment getAppointment(String id) {
		return appointmentDao.get(Integer.parseInt(id));
	}

	public Appointment getAppointment(Integer id) {
		return appointmentDao.get(id);
	}

	public Appointment deleteAppointment(Integer id) {
		appointmentDao.delete(id);
		
		Appointment appointment = getAppointment(id);
		if(appointment != null) {
			appointmentDao.delete(id);
		}
		return null;
	}


	public void deleteAppointment(String id) {
		appointmentDao.delete(Integer.parseInt(id));
	}


	public List<Appointment> getAppointments(){
		return appointmentDao.list();

	}


	public Appointment saveAppointment(AppointmentCommand command) {
		
		Appointment newAppointment = new Appointment(command.getId(), command.getPetId(), command.getClientId(), command.getReason(), command.getDateTime().toString(), command.getDurationInt(), command.getComments());
		
		return appointmentDao.save(newAppointment);
	}
	
	


	/*public Pet getPet(int petId) {
		return petDao.get(petId);
	}*/
	
	public List<Pet> getPets() {
		return petDao.list();
	}
	

}