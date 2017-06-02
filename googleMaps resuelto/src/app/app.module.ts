import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
//import { GooglrMapDirective } from './googlr-map.directive';
import { DirectionsMapDirective } from './googlr-map.directive';


@NgModule({
  declarations: [
    AppComponent,
    DirectionsMapDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQeKmiSQJmZqY7nNtuqf4gTRyIE4Qws20',
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
