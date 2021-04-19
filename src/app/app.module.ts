import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './Services/login.service';
import { NoPageComponent } from './Components/no-page/no-page.component';

@NgModule({
  declarations: [routingComponents],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
