import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { FileUploadModule } from 'ng2-file-upload';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {PopupModule} from 'ng2-opd-popup';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent//,
  //  FileUploadModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    PopupModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
