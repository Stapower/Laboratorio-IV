import { Injectable } from '@angular/core';
import { Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonasService{

  route : string = "http://localhost/angular1p/api/index.php/";
  constructor(private http : Http) { }
  
  TraerPersonas(){
    return this.http.get("https://pps-tomas.000webhostapp.com/Clase-1/Clase1.php/traerTodos").toPromise().then(data => data.json());
  }

  BorrarPersona(id, dni){
    //REQUESTOPTIONS SIRVE PARA PASAR PARAMETROS CON HTTP
    let requestOptions = new RequestOptions({
      body : {"id" : id, "dni" : dni}
    });
    return this.http.delete(this.route + "persona/borrar", requestOptions).toPromise();
  }

  AgregarPersona(formData){
    return this.http.post(this.route + "persona/agregar", formData).toPromise();
  }
}
