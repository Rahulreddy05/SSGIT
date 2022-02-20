import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './src/components/about-us/about-us.component';
import { BenefitsComponent } from './src/components/benefits/benefits.component';
import { CarrersComponent } from './src/components/carrers/carrers.component';
import { ContactUsComponent } from './src/components/contact-us/contact-us.component';
import { HomeComponent } from './src/components/home/home.component';
import { ApplicationstaffingserviceComponent } from './src/components/Itservices/applicationstaffingservice/applicationstaffingservice.component';
import { DigitalandcreativeComponent } from './src/components/Itservices/digitalandcreative/digitalandcreative.component';
import { ItdirectplacementComponent } from './src/components/Itservices/itdirectplacement/itdirectplacement.component';
import { NetworkinfrastructureserviceComponent } from './src/components/Itservices/networkinfrastructureservice/networkinfrastructureservice.component';
import { ProfilesComponent } from './src/components/profiles/profiles.component';
import { ServicesComponent } from './src/components/services/services.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'services', component: ServicesComponent,
  children:[
    {path:'Digital And Creative Services', component:DigitalandcreativeComponent},
  {path:'Application Staffing Services', component:ApplicationstaffingserviceComponent},
  {path:'Network Infrastructure Staffing Services', component:NetworkinfrastructureserviceComponent},
  {path:'IT Direct Placement Services', component:ItdirectplacementComponent}
  ]},
  {path:'profiles', component: ProfilesComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path:'carrers', component: CarrersComponent},
  {path:'benefits', component: BenefitsComponent},
  {path:'about-us', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[HomeComponent, ServicesComponent, ProfilesComponent,ContactUsComponent, CarrersComponent,  BenefitsComponent,  AboutUsComponent]
