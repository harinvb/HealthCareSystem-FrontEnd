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

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
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
];
