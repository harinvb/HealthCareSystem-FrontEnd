import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './Services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientService } from './Services/Patient.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CenterService } from './Services/DiagnosticCenter.service';
import { AppointmentService } from './Services/Appointment.service';
import { TestResultService } from './Services/TestResult.service';
import { DiagnosticTestService } from './Services/DiagnosticTest.service';

@NgModule({
  declarations: [routingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    LoginService,
    PatientService,
    CenterService,
    AppointmentService,
    DiagnosticTestService,
    TestResultService,
  ],
  bootstrap: [AppComponent],
  exports: [routingComponents],
})
export class AppModule {}
