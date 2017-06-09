import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, Input, Output {

  // Creo un evento
  @Output() onDesaprobado = new EventEmitter<any>();
  // Creo una propiedad con get y set
  @Input()
    set Estado(name: any){
      console.log('setter', name);
      this.estado = 'alert alert-danger';//name;
      /**
       * Mostramos el color del alert segun la nota
       * 9 - 10 Verde
       * 8 - 7 Azul
       * 6 - 4 Naranja
       * 3 - 1 Rojo
       */
       switch (name) {
         case '10':
         case '9':
           this.estado = 'alert alert-success';
           this.msj.strong = "Excelente.";
           this.msj.msj = "Sigue asi, Linus!";
           break;
         case '8':
         case '7':
           this.estado = 'alert alert-info';
           this.msj.strong = "Muy Bien.";
           this.msj.msj = "Sigue asi, no te duermas!";
           break;
         case '6':
         case '5':
         case '4':
           this.estado = 'alert alert-warning';
           this.msj.strong = "Bien.";
           this.msj.msj = "De Casualidad, programa un poco mas!";
           break;
         case '3':
         case '2':
           this.estado = 'alert alert-danger';
           // Emite el evento
           this.onDesaprobado.emit("Usted debe estudiar mas.");
           this.msj.strong = "Mal.";
           this.msj.msj = "Menos Poquemones y mas programacion!";
           break;
         default:
         this.estado = 'alert alert-warning';
           break;
       }
      /**
       * Si esta desaprobado emitimos el evento onDesaprobado
       */
      this.onDesaprobado.emit(1);
      // this.disparo();
    }
    get Estado(){
      // console.log('getter', this.cuit);
      return this.estado;
    }

  estado: any;
  msj = {
    strong: '',
    msj: ''
  }
  constructor() {
    
  }

  ngOnInit() {
  }
  disparo ()
  {
    this.onDesaprobado.emit(1);

  }
}
