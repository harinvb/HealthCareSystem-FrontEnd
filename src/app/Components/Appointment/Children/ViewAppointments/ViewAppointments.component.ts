import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Interfaces/Appointment';
import { AppointmentStatus } from 'src/app/Interfaces/AppointmentStatus.enum';
import { AppointmentService } from 'src/app/Services/Appointment.service';
import { PatientService } from 'src/app/Services/Patient.service';

@Component({
  selector: 'app-ViewAppointments',
  templateUrl: './ViewAppointments.component.html',
  styleUrls: ['./ViewAppointments.component.css'],
})
export class ViewAppointmentsComponent implements OnInit {
  appointments!: Appointment[];
  hasAppointments!: boolean;
  appstat!: AppointmentStatus;
  constructor(
    private appServ: AppointmentService,
    private patServ: PatientService,
    private routes: Router
  ) {}

  ngOnInit() {
    this.fetchApps();
  }

  fetchApps() {
    this.patServ.getByUserID().subscribe(
      (data) => {
        if (data != null) {
          this.appointments = data.appointments;
          if (this.appointments != null && this.appointments.length != 0) {
            this.hasAppointments = true;
            this.appointments.sort(
              (x, y) =>
                +new Date(y.appointmentDate) - +new Date(x.appointmentDate)
            );
          }
        } else {
          this.routes.navigateByUrl('patient');
        }
      },
      (error) => {
        this.hasAppointments = false;
        console.log(error);
      }
    );
  }

  check(stat: any) {
    if (stat == 'statusnotapproved') return 1;
    else if (stat == 'cancelled') return 0;
    else return 2;
  }

  statusPipe(stat: any) {
    if (stat == 'statusnotapproved') return 'Status Not Yet Approved';
    else return stat;
  }
}
