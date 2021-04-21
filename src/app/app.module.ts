import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './Services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientService } from './Services/Patient.service';

@NgModule({
  declarations: [routingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [LoginService, PatientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
