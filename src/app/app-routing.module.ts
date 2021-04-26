import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NoPageComponent } from './Components/no-page/no-page.component';
import { AppointmentComponent } from './Components/Appointment/Appointment.component';
import { PatientComponent } from './Components/Patient/Patient.component';
import { AdminControlComponent } from './Components/AdminControl/AdminControl.component';
import { DiagnosticCenterComponent } from './Components/DiagnosticCenter/DiagnosticCenter.component';
import { DiagnosticTestComponent } from './Components/DiagnosticTest/DiagnosticTest.component';
import { TestResultComponent } from './Components/TestResult/TestResult.component';
import { ViewAppointmentsComponent } from './Components/Appointment/Children/ViewAppointments/ViewAppointments.component';
import { CreateAppointmentComponent } from './Components/Appointment/Children/CreateAppointment/CreateAppointment.component';
import { VerifyAppointmentComponent } from './Components/Appointment/Children/VerifyAppointment/VerifyAppointment.component';
import { UpdateAppointmentComponent } from './Components/Appointment/Children/UpdateAppointment/UpdateAppointment.component';
import { UAppFormComponent } from './Components/Appointment/Children/UpdateAppointment/UAppForm/UAppForm.component';
import { UpdateEachComponent } from './Components/Appointment/Children/UpdateAppointment/UpdateEach/UpdateEach.component';
import { UpdateComponent } from './Components/Patient/Update/Update.component';
import { UserComponent } from './Components/User/User.component';
import { UserRegistrarionComponent } from './Components/User/UserRegistrarion/UserRegistrarion.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'appointment',
    component: AppointmentComponent,

    children: [
      {
        path: '',
        redirectTo: 'verifyappointment',
        pathMatch: 'full',
      },
      {
        path: 'createappointment',
        component: CreateAppointmentComponent,
      },
      {
        path: 'viewappointment',
        component: ViewAppointmentsComponent,
      },
      {
        path: 'verifyappointment',
        component: VerifyAppointmentComponent,
      },
      {
        path: 'updateappointments',
        component: UpdateAppointmentComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'patient',
    component: PatientComponent,
  },
  {
    path: 'testresult',
    component: TestResultComponent,
  },
  {
    path: 'diagnostictest',
    component: DiagnosticTestComponent,
  },
  {
    path: 'diagnosticcenter',
    component: DiagnosticCenterComponent,
  },
  {
    path: 'admincontrol',
    component: AdminControlComponent,
  },
  {
    path: 'Uapp',
    component: UAppFormComponent,
  },
  {
    path: 'UpdateEach',
    component: UpdateEachComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: '**',
    component: NoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LoginComponent,
  AppComponent,
  HomeComponent,
  NoPageComponent,
  AdminControlComponent,
  DiagnosticCenterComponent,
  DiagnosticTestComponent,
  TestResultComponent,
  PatientComponent,
  AppointmentComponent,
  CreateAppointmentComponent,
  ViewAppointmentsComponent,
  VerifyAppointmentComponent,
  UpdateAppointmentComponent,
  UAppFormComponent,
  UpdateEachComponent,
  UpdateComponent,
  UserComponent,
  UserRegistrarionComponent,
];
