
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchClimeComponent } from './search-clime/search-clime.component';
import { SearchClime2Component } from './search-clime2/search-clime2.component';
import { WeatherResultsComponent } from './weather-results/weather-results.component';
import { RegisterComponent } from './register/register.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { MessageStartComponent } from './message-start/message-start.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/message-start', pathMatch: 'full',   
  },
  {
    path: 'message-start',
    component: MessageStartComponent
  },
  {
    path: "search-clime",
    component: SearchClimeComponent
  },
  {
    path: "search-clime2",
    component: SearchClime2Component
  },
  {
    path: "weather-results",
    component: WeatherResultsComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "register-login",
    component: RegisterLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
