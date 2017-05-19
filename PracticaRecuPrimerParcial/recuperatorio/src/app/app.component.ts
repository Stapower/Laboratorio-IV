import { Component } from '@angular/core';
import {ApiService} from '../Services/Api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   data:any;
   providers: [ApiService]
   alta = false;
   constructor(private service : ApiService ) { 
   this.service.TraerDatos().then(Response => this.data= JSON.parse(JSON.stringify(Response)));
   }
    
   EliminarPersona(id)
   {
     console.log("eliminar "+id);
     this.service.Eliminar(id).then(Response => console.log(Response));
      this.service.TraerDatos().then(Response => this.data= JSON.parse(JSON.stringify(Response)));
     //this.http.post(this.route + "persona/agregar", id).toPromise();
   }
  Color(sexo)
  {
    console.log(sexo);
    if(sexo == 'f')
      return '#ffccff !important';
    
    return '#0000FF !important';
  }
   ModificarPersona()
   {

   }

   AgregarPersona()
   {
     
     this.alta=!this.alta;
   }
}
