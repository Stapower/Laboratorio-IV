import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { PromptComponent } from './prompt.component';

import { AppComponent } from './app.component';
import { PersonasService } from './personas.service';

@NgModule({
  declarations: [
    AppComponent,
    PromptComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BootstrapModalModule
    
  ],
  entryComponents: [
   
    PromptComponent
  ],
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
