import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SearchClimeComponent } from './search-clime/search-clime.component';
import { SearchClime2Component } from './search-clime2/search-clime2.component';
import { WeatherResultsComponent } from './weather-results/weather-results.component';
import { RegisterComponent } from './register/register.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { MessageStartComponent } from './message-start/message-start.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SearchClimeComponent,
    SearchClime2Component,
    WeatherResultsComponent,
    RegisterComponent,
    RegisterLoginComponent,
    MessageStartComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
