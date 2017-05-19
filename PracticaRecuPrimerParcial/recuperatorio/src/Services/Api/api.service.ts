import { Http, Response } from '@angular/http';
//import { DatosService } from './../services/datos.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class ApiService {
 url =  'https://pps-tomas.000webhostapp.com/Clase-1/Clase1.php/SaveTrivialScore/';
 //url = 'http://restcountries.eu/rest/v2/all';
  constructor (public http:Http)
  { 
   // console.info(this.traerTodosLosPaises());
  }

  AgregarPersona(formData){
    var parametro = "https://pps-tomas.000webhostapp.com/Clase-1/Clase1.php/";
    return this.http.post(parametro + "persona/agregar", formData).toPromise();
  }

TraerDatos():Promise<any>
{
  var parametro = "https://pps-tomas.000webhostapp.com/Clase-1/Clase1.php/traerTodos";
      return this.http
        .get(parametro)
        .toPromise()
        .then(this.extraerDatos)
        .catch(this.error);
}

Eliminar(id):any
{
 
  var parametro = "https://pps-tomas.000webhostapp.com/Clase-1/Clase1.php/eliminarUno/"+id;
  return this.http.get(parametro)
  .then(this.extraerDatos)
  .catch(this.error);
}

Modificar():Promise<any>
{
  var parametro = "https://pps-tomas.000webhostapp.com/Clase-1/Clase1.php/traerTodos";
      return this.http
        .get(parametro)
        .toPromise()
        .then(this.extraerDatos)
        .catch(this.error);
}

private extraerDatos(res: Response)
    {
      return res.json() || "no hay datos";
      //return res.json || {};
    }
    private error(error:Response)
    {
      return error;
    }
}
