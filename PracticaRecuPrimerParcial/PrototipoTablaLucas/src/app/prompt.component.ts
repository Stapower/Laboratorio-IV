import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {AppComponent} from "./app.component";
import { PersonasService } from './personas.service';
export interface PromptModel {
  title:string;
}

@Component({
  selector: 'prompt',
  template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close" (click)="close()">&times;</button>
                     <h4 class="modal-title">{{title || 'Alta Usuario'}}</h4>
                   </div>
                   <div class="modal-body">
                     <label>Nombre</label><input type="text" class="form-control" [(ngModel)]="nombre" name="Nombre" >                  
                     <label>Apellido</label><input type="text" class="form-control" [(ngModel)]="apellido" name="Apellido" >                  
                     <label>DNI</label><input type="number" class="form-control" placeholder="DNI" [(ngModel)]="dni" name="DNI" >                  
                     <label>Sexo</label>                
                     <br/>
                     <input type="radio" name="sexo" [(ngModel)]="sexo" class="a" value="m"> Masculino
                     <input type="radio" name="sexo" [(ngModel)]="sexo" class="a" value="f"> Femenino
                     <br/>
                     
                     <img src="" id="fotoPrevia" style=" width: 120px; height: 120px;" > <input type="file" id="foto" (change)="PrevisualizarFoto();"/>
                     <br/>
                     <br/><input type="password"  class="form-control" placeholder="Password" [(ngModel)]="pass" name="pass"/><br>
                     <br/>
                     <p [ngStyle]="{'color': 'red'}">{{mensajeErrorFormAlta}}</p>
                 
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="AgregarPersona()">Agregar Persona</button>
                     <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
                   </div>
                 </div>
                </div>`
})
export class PromptComponent extends DialogComponent<PromptModel, string> implements PromptModel {
  title: string;
  question: string;
  foto:AppComponent;
nombre:string;
pass:string;
apellido:string;
dni:number;
sexo:string;

  mensajeErrorFormAlta:string;
  message: string = '';
  constructor(dialogService: DialogService,private PersonaService : PersonasService) {
    super(dialogService);
  }
  test()
  {
  console.log(this.nombre);
  console.log(this.apellido);
   console.log(this.dni);
  console.log(this.sexo);
  console.log((<HTMLInputElement>document.getElementById('foto')).files[0]);
 
  console.log(this.pass);

  }
  apply() {
    this.result = this.message;
    this.close();
  }



  
  //PREVISUALIZACION DE FOTO
  PrevisualizarFoto(){
    //VERIFICACION DE VALIDACION
    if(!this.ValidarFoto()){
      (<HTMLImageElement>document.getElementById('fotoPrevia')).src = null;
      return;
    }
    //1)CREACION DEL OBJETO QUE LEE EL ARCHIVO
    var miLector = new FileReader();
    //3)SETEO DE LA FUNCION QUE SE EJECUTARA AL FINALIZAR LA LECTURA
    miLector.onload = function() {
      (<HTMLImageElement>document.getElementById('fotoPrevia')).src = miLector.result;
    }
    //2)LECTURA DEL ARCHIVO Y ALMACENAMIENTO COMO URL EN LA PROPIEDAD "RESULT"
    miLector.readAsDataURL((<HTMLInputElement>document.getElementById('foto')).files[0]);
  }
  //VALIDACION DE FOTO PREVISUALIZADA EN EXTENSION Y TAMAÑO
  ValidarFoto(){
    //OBTENCION DE LA FOTO SELECCIONADA
    var archivo = (<HTMLInputElement>document.getElementById('foto')).files[0];
    //EXPRESION REGULAR QUE EVALUA LA PRESENCIA DE CUALQUIERA DE LOS FORMATOS ACEPTADOS
    var re = /(\.jpg|\.jpeg|\.png|\.bmp|\.gif)$/i;
    //VERIFICACION DEL TIPO DE ARCHIVO
    if(!re.exec(archivo.name))
    {
      this.mensajeErrorFormAlta = "Cambie la imagen, sólo se permiten imágenes con extensión .jpg .jpeg .bmp .gif o .png";
      return false;
    }
    //VERIFICACION DEL TAMAÑO DEL ARCHIVO
    if(archivo.size > (9 /*1MB*/ * 1024 * 1024)) {//La propiedad size devuelve el tamaño en bytes. Multiplicacion de los mb deseados por 1024 para convertir a bytes
      this.mensajeErrorFormAlta = "Cambie la imagen, solo se permiten tamaños imagenes de tamaño inferior a 1 MB";
      return false;
    }
    this.mensajeErrorFormAlta = "";
    return true;
  }

  //CREACION DE UN USUARIO
  AgregarPersona(){
    //VERIFICACION DE FOTO
  
  
      //CREACION DE OBJETO FORMDATA QUE CONTENDRA LA INFO DEL FORMULARIO
      var formData = new FormData();
      //AGREGADO DE LA FOTO AL FORMADATA
      formData.append('foto', (<HTMLInputElement>document.getElementById('foto')).files[0]);
      //AGREGADO DE PARES CLAVE/VALOR AL FORMDATA
      formData.append('nombre', this.nombre);
      formData.append('apellido', this.apellido);
      formData.append('dni', this.dni);
      formData.append('sexo', this.sexo);
      formData.append('pass', this.pass);
   
      
      this.PersonaService.AgregarPersona(formData)
        .then((data) => {
          //SI HAY ALGUN MENSAJE DE ERROR, AVISAR E IMPEDIR
          if(data.json() != null){
           this.mensajeErrorFormAlta = data.json();
            return;
          }
 this.close();
    this.PersonaService.TraerPersonas()

     });
    
  }
}

