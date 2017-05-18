import { Component, EventEmitter,Input, Output, ViewChild } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import {ApiService} from '../Services/Api/api.service';
//import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//FORMBUILDER CREA FORMS, FORMGROUP DEFINE UN FORMULARIO Y VALIDATORS CONTIENE VALIDACIONES PREDISEÑADAS
import { PromptComponent } from 'Partes/alta';
import {Popup} from 'ng2-opd-popup';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService,DialogService,Popup],
  template:  `<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Usuarios</title>
  <meta name="viewport" content="initial-scale=1.0; maximum-scale=1.0; width=device-width;">
</head>

<body>
<div class="table-title">
<h3>Usuarios</h3>
</div>
  <button type="button" (click)="AgregarPersona()">Agregar</button>
<table class="table-fill">
<thead>
<tr>
<th class="text-left">Id</th>
<th class="text-left">Nombre</th>
<th class="text-left">Apellido</th>
<th class="text-left">foto</th>
<th class="text-left">sexo</th>
<th class="text-left">dni</th>
<th class="text-left">eliminar</th>
<th class="text-left">modificar</th>
</tr>
</thead>
<tbody class="table-hover" *ngIf='data' >
<tr *ngFor='let persona of data'>
<td class="text-left">{{persona.id}}</td>
<td class="text-left">{{persona.nombre}}</td>
<td class="text-left">{{persona.apellido}}</td>
<td><img [ngStyle]="{'width': '100px'}" src="https://pps-tomas.000webhostapp.com/Clase-1/fotos/{{persona.foto}}"></td>
<td class="text-left">{{persona.sexo}}</td>
<td class="text-left">{{persona.dni}}</td>
<td><button (click)="EliminarPersona(persona.id)">Eliminar</button></td>
<td><button (click)="ModificarPersona(persona.id)">Modificar</button></td>
</tr>
</tbody>
</table>
  

  </body>
  `
})
export class AppComponent 
{
  //dataSmart: LocalDataSource;
  data:any;
 /* @Input() deleteConfirm: EventEmitter<any>;
  @Input() editConfirm: EventEmitter<any>;

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();*/

   /*onEdit(event: any) {
     console.log("onEdit");
   }

    onDelete(event: any) {
      console.log("onDelete";
    }*/
  @ViewChild('popup1') popup1: Popup;
  @ViewChild('popup2') popup2: Popup;
   constructor(private service : ApiService,  public formBuilder: FormBuilder,private dialogService:DialogService, private popup:Popup ) { 
   this.service.TraerDatos().then(Response => this.data= JSON.parse(JSON.stringify(Response)));
   }
    
   EliminarPersona()
   {

   }

   ModificarPersona()
   {

   }
   AgregarPersona()
   {
     console.log('agregar persona');
           this.popup.options = {
            cancleBtnClass: "btn btn-default", 
            confirmBtnClass: "btn btn-default",
            color: "#4180ab",
            header: "Single Popup on a page"}
    this.popup.show();

      /*this.dialogService.addDialog(PromptComponent, {
      title:'Alta Usuario'
      })
    
      .subscribe((message)=>{
        //We get dialog result
        //this.promptMessage = message;
        console.log('mensaje' + message)
      });*/
   }
   
/*  settings = {
  columns: {
    borrar: {
      title: 'Borrar',
      filter: false,
      type: 'html',
      valueprepareFunction: (button) => { return '<button (click)="alert()">Click me</button>'; }
    },
    modificar: {
      title: 'Modificar',
      filter: false
    },
    id: {
      title: 'ID'
    },
    nombre: {
      title: 'First Name'
    },
    apellido: {
      title: 'Last Name'
    },
    dni: {
      title: 'DNI'
    },
    foto: {
      title: 'foto',
      type: 'html',
      //filter: false,
      //valuePrepareFunction: (img) => { return `<img src="foto" />` }
      valuePrepareFunction: (img) => { return '<img [scr]=foto />' }
    },
    sexo: {
      title: 'sexo'
    },
    password: {
      title: 'password'
    }
  }
};
/*
data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },
  
  // ... list of items
  
  {
    id: 11,
    name: "Nicholas DuBuque",
    username: "Nicholas.Stanton",
    email: "Rey.Padberg@rosamond.biz"
  }
];

  title = 'app works!';*/
}
