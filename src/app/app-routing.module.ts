import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NoPageComponent } from './Components/no-page/no-page.component';
import { AppointmentComponent } from './Components/Appointment/Appointment.component';
import { PatientComponent } from './Components/Patient/Patient.component';
import { TestResultComponent } from './Components/TestResult/TestResult.component';
import { ViewAppointmentsComponent } from './Components/Appointment/Children/ViewAppointments/ViewAppointments.component';
import { CreateAppointmentComponent } from './Components/Appointment/Children/CreateAppointment/CreateAppointment.component';
import { VerifyAppointmentComponent } from './Components/Appointment/Children/VerifyAppointment/VerifyAppointment.component';
import { UpdateAppointmentComponent } from './Components/Appointment/Children/UpdateAppointment/UpdateAppointment.component';
import { UAppFormComponent } from './Components/Appointment/Children/UpdateAppointment/UAppForm/UAppForm.component';
import { UpdateEachComponent } from './Components/Appointment/Children/UpdateAppointment/UpdateEach/UpdateEach.component';
import { UserComponent } from './Components/User/User.component';
import { UserRegistrarionComponent } from './Components/User/UserRegistrarion/UserRegistrarion.component';
import { AlltestsComponent } from './Components/DiagnosticTest/alltests/alltests.component';
import { CreateComponent } from './Components/TestResult/create/create.component';
import { AllTestresultComponent } from './Components/TestResult/all-testresult/all-testresult.component';
import { UpdatetestresultComponent } from './Components/TestResult/updatetestresult/updatetestresult.component';
import { DiagnosticTestComponent } from './Components/DiagnosticTest/diagnostic-test.component';
import { UpdateComponent } from './Components/DiagnosticTest/update/update.component';
import { UpdatePatientComponent } from './Components/Patient/Update/Update.component';
import { AllTestComponent } from './Components/DiagnosticTest/all-test/all-test.component';
import { AddcenterComponent } from './Components/diagnosticcenter/addcenter/addcenter.component';
import { AddtesttocenterComponent } from './Components/diagnosticcenter/addtesttocenter/addtesttocenter.component';
import { DiagnosticcenterComponent } from './Components/diagnosticcenter/diagnosticcenter.component';
import { GetallcentersComponent } from './Components/diagnosticcenter/getallcenters/getallcenters.component';
import { TestdetailsComponent } from './Components/diagnosticcenter/testdetails/testdetails.component';
import { UpdatecenterComponent } from './Components/diagnosticcenter/updatecenter/updatecenter.component';

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
    path: 'testresult',
    component: TestResultComponent,

    children: [
      {
        path: 'add',
        component: CreateComponent,
      },
      {
        path: 'all',
        component: AllTestresultComponent,
      },
      {
        path: 'updateresult/:testResultid',
        component: UpdatetestresultComponent,
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
    path: 'diagnostictest',
    component: DiagnosticTestComponent,
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
    path: 'diagnosticcenter',
    component: DiagnosticcenterComponent,
    children: [
      { path: 'all', component: GetallcentersComponent },
      { path: 'add', component: AddcenterComponent },
      { path: 'update/:diagonasticCenterid', component: UpdatecenterComponent },
      {
        path: 'testdetails/:diagonasticCenterid',
        component: TestdetailsComponent,
      },
      {
        path: 'addtest/:diagonasticCenterid',
        component: AddtesttocenterComponent,
      },
    ],
  },
  {
    path: 'diagnostictest',
    component: DiagnosticTestComponent,
    children: [
      { path: 'all', component: AlltestsComponent },
      { path: 'add', component: UpdateComponent },
      { path: 'update/:diagnosticTestid', component: UpdateComponent },
      // { path: 'details/:id', component: TestDetailsComponent}
    ],
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
  TestResultComponent,
  CreateComponent,
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
  DiagnosticcenterComponent,
  GetallcentersComponent,
  AddcenterComponent,
  UpdatecenterComponent,
  TestdetailsComponent,
  AddtesttocenterComponent,
  DiagnosticTestComponent,
  AlltestsComponent,
  UpdateComponent,
  TestResultComponent,
  AllTestresultComponent,
  UpdatetestresultComponent,
  UpdatePatientComponent,
  AllTestComponent,
];
