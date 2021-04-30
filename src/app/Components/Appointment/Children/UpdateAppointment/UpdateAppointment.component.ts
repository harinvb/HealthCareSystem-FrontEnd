import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Interfaces/Appointment';
import { AppointmentStatus } from 'src/app/Interfaces/AppointmentStatus.enum';
import { AppointmentService } from 'src/app/Services/Appointment.service';

@Component({
  selector: 'app-UpdateAppointment',
  templateUrl: './UpdateAppointment.component.html',
  styleUrls: ['./UpdateAppointment.component.css'],
})
export class UpdateAppointmentComponent implements OnInit {
  appointments!: Appointment[];
  hasAppointments = false;
  appstat!: AppointmentStatus;
  search: any;
  addTest = false;
  getAll = false;
  constructor(private appServ: AppointmentService) {}

  ngOnInit() {
    this.fetchApps();
  }

  fetchApps() {
    if (this.getAll) {
      this.appServ.getAllAppointments().subscribe(
        (data) => {
          this.appointments = data;
          this.hasAppointments = true;
          this.appointments.sort(
            (x, y) =>
              +new Date(y.appointmentDate) - +new Date(x.appointmentDate)
          );
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.appServ.getUpdatableAppointments().subscribe(
        (data) => {
          this.appointments = data;
          this.hasAppointments = true;
          this.appointments.sort(
            (x, y) =>
              +new Date(y.appointmentDate) - +new Date(x.appointmentDate)
          );
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  addTestResult() {
    this.addTest = true;
  }

  checkChange() {
    this.getAll = !this.getAll;
    this.fetchApps();
  }

  check(stat: any) {
    if (stat == 'statusnotapproved') return 1;
    else if (stat == 'cancelled') return 0;
    else return 2;
  }
}
