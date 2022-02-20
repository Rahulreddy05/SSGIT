import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './src/components/home/home.component';
import { AboutUsComponent } from './src/components/about-us/about-us.component';
import { ProfilesComponent } from './src/components/profiles/profiles.component';
import { ServicesComponent } from './src/components/services/services.component';
import { CarrersComponent } from './src/components/carrers/carrers.component';
import { BenefitsComponent } from './src/components/benefits/benefits.component';
import { ContactUsComponent } from './src/components/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { MDBRootModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MDBRootModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
