import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBb6M-7ntgU0mhB7MafTyXZAE-BmZnsZg8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
