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
import { AlltestsComponent } from './Components/DiagnosticTest/alltests/alltests.component';
import { CreateComponent } from './Components/TestResult/create/create.component';
import { AllTestresultComponent } from './Components/TestResult/all-testresult/all-testresult.component';
import { UpdatetestresultComponent } from './Components/TestResult/updatetestresult/updatetestresult.component';
import { DiagnosticTestComponent } from './Components/DiagnosticTest/diagnostic-test.component';
import { UpdateComponent } from './Components/DiagnosticTest/update/update.component';
import { UpdatePatientComponent } from './Components/Patient/Update/Update.component';
import { AllTestComponent } from './Components/DiagnosticTest/all-test/all-test.component';
import { AdminGuard } from './Admin.guard';
import { AddcenterComponent } from './Components/DiagnosticCenter/addcenter/addcenter.component';
import { AddtesttocenterComponent } from './Components/DiagnosticCenter/addtesttocenter/addtesttocenter.component';
import { CenterhomeComponent } from './Components/DiagnosticCenter/centerhome/centerhome.component';
import { DiagnosticcenterComponent } from './Components/DiagnosticCenter/DiagnosticCenter.component';
import { GetallcentersComponent } from './Components/DiagnosticCenter/getallcenters/getallcenters.component';
import { TestdetailsComponent } from './Components/DiagnosticCenter/testdetails/testdetails.component';
import { UpdatecenterComponent } from './Components/DiagnosticCenter/updatecenter/updatecenter.component';
import { UserGuard } from './User.guard';


import { UserComponent } from './Components/User/User.component';
import { UserRegistrarionComponent } from './Components/User/UserRegistrarion/UserRegistrarion.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
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
    canActivate: [UserGuard],
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
    children: [
      {
        path: 'createappointment',
        component: CreateAppointmentComponent,
        canActivate: [UserGuard],
      },
      {
        path: 'viewappointment',
        component: ViewAppointmentsComponent,
        canActivate: [UserGuard],
      },
      {
        path: 'verifyappointment',
        component: VerifyAppointmentComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'updateappointments',
        component: UpdateAppointmentComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
  {
    path: 'testresult',
    component: TestResultComponent,
    canActivate: [AdminGuard],
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
    path: 'diagnosticCenter',
    redirectTo: 'diagnosticCenter/centerhome',
    pathMatch: 'full',
  },
  {
    path: 'diagnosticCenter',
    component: DiagnosticcenterComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'all', component: GetallcentersComponent },
      { path: 'centerhome', component: CenterhomeComponent },
      { path: 'add', component: AddcenterComponent },
      { path: 'update/:diagonasticCenterid', component: UpdatecenterComponent },
      {
        path: 'testDetails/:diagonasticCenterid',
        component: TestdetailsComponent,
      },
      {
        path: 'addTest/:diagonasticCenterid',
        component: AddtesttocenterComponent,
      },
    ],
  },
  {
    path: 'diagnostictest',
    component: DiagnosticTestComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'all', component: AllTestComponent },
      { path: 'add', component: AddtestComponent },
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
  DiagnosticcenterComponent,
  CenterhomeComponent,
  GetallcentersComponent,
  AddcenterComponent,
  UpdatecenterComponent,
  TestdetailsComponent,
  AddtesttocenterComponent,
  DiagnosticTestComponent,
  AlltestsComponent,
  AddtestComponent,
  UpdateComponent,
  TestResultComponent,
  AllTestresultComponent,
  UpdatetestresultComponent,
  UpdatePatientComponent,
  AllTestComponent,
  UserComponent,
  UserRegistrarionComponent,
];
