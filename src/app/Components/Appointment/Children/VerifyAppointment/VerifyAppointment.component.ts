import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Interfaces/Appointment';
import { AppointmentStatus } from 'src/app/Interfaces/AppointmentStatus.enum';
import { AppointmentService } from 'src/app/Services/Appointment.service';

@Component({
  selector: 'app-VerifyAppointment',
  templateUrl: './VerifyAppointment.component.html',
  styleUrls: ['./VerifyAppointment.component.css'],
})
export class VerifyAppointmentComponent implements OnInit {
  appointments!: Appointment[];
  hasAppointments = false;
  appstat!: AppointmentStatus;
  constructor(private appServ: AppointmentService) {}

  ngOnInit() {
    this.fetchApps();
  }

  fetchApps() {
    this.appServ.getVerifiableAppointments().subscribe(
      (data) => {
        this.appointments = data;
        this.hasAppointments = true;
        this.appointments.sort(
          (x, y) => +new Date(y.appointmentDate) - +new Date(x.appointmentDate)
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  verify(app: Appointment) {
    this.appServ.verifyAppointment(app).subscribe((data) => {
      this.fetchApps();
     }, (error) => {
      console.log(error);
    })
  }

  reject(app: Appointment) {
    this.appServ.rejectAppointment(app).subscribe(
      (data) => {
        this.fetchApps();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
