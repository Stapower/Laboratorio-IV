import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//FORMBUILDER CREA FORMS, FORMGROUP DEFINE UN FORMULARIO Y VALIDATORS CONTIENE VALIDACIONES PREDISEÑADAS
import { PromptComponent } from './prompt.component';
import { PersonasService } from './personas.service';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formVisible = false;
  datosTraidos;
  
  formAgregar : FormGroup;

  mensajeErrorFormAlta : string;
  promptMessage:string = '';
  constructor(private PersonaService : PersonasService, public formBuilder: FormBuilder,private dialogService:DialogService) {    
    this.TraerPersonas();
    //UTILIZACIÓN DE CONSTRUCTOR DE FORMULARIOS CON VALIDACIONES
    this.formAgregar = formBuilder.group({
        nombrePersona: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^[a-zA-Z]+$'), Validators.required])],
        apellidoPersona: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^[a-zA-Z]+$'), Validators.required])],
        dniPersona: ['', Validators.compose([Validators.maxLength(8), Validators.pattern('^[0-9]*$'), Validators.required])],
        sexoPersona: ['m', Validators.required],
        passPersona: ['', Validators.compose([Validators.maxLength(30), Validators.required])]
    });
  }

  TraerPersonas(){
    this.PersonaService.TraerPersonas()
      .then(data => {
        this.datosTraidos = data;
      }) 
      .catch(error => {
        console.log(error);
      });
  }

showPrompt() {
    this.dialogService.addDialog(PromptComponent, {
      title:'Alta Usuario'
      })
    
      .subscribe((message)=>{
        //We get dialog result
        this.promptMessage = message;
      });
  }


  MostrarFormulario() {
    this.formVisible = !this.formVisible;
    this.formAgregar.reset();
  }

  EliminarPersona(id, dni) { 
    this.PersonaService.BorrarPersona(id, dni)
      .then(() => this.TraerPersonas());
  }

  ElegirColor(sexo) { 
    if(sexo == 'f')
      return '#ffccff';//rosa discreto
    else
    {
      return '#99ccff';//celeste cielo
    }
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
    if ((<HTMLInputElement>document.getElementById('foto')).files[0] == undefined) {
      this.mensajeErrorFormAlta = 'La foto es obligatoria.';
      return;
    }
    //VERIFICACION DE NOMBRE
    if (this.formAgregar.get('nombrePersona').invalid) {
      this.mensajeErrorFormAlta = 'El nombre no puede estar vacío y solo puede estar compuesto de letras hasta 30';
      return;
    }
    //VERIFICACION DE APELLIDO
    if(this.formAgregar.get('apellidoPersona').invalid){
      this.mensajeErrorFormAlta = 'El apellido no puede estar vacío y solo puede estar compuesto de letras hasta 30';
      return;
    }
    //VERIFICACION DE DNI
    if(this.formAgregar.get('dniPersona').invalid){
      this.mensajeErrorFormAlta = 'El DNI no puede estar vacío y solo puede estar compuesto de números hasta 8 digitos';
      return;
    }
    //VERIFICACION DE PASSWORD
    if(this.formAgregar.get('passPersona').invalid){
      this.mensajeErrorFormAlta = 'Debe ingresar la contraseña y pueden ser hasta 30 caracteres';
      return;
    }
    if(this.formAgregar.valid){
      //CREACION DE OBJETO FORMDATA QUE CONTENDRA LA INFO DEL FORMULARIO
      var formData = new FormData();
      //AGREGADO DE LA FOTO AL FORMADATA
      formData.append('foto', (<HTMLInputElement>document.getElementById('foto')).files[0]);
      //AGREGADO DE PARES CLAVE/VALOR AL FORMDATA
      formData.append('nombre', this.formAgregar.value.nombrePersona);
      formData.append('apellido', this.formAgregar.value.apellidoPersona);
      formData.append('dni', this.formAgregar.value.dniPersona);
      formData.append('sexo', this.formAgregar.value.sexoPersona);
      formData.append('pass', this.formAgregar.value.passPersona);
      this.PersonaService.AgregarPersona(formData)
        .then((data) => {
          //SI HAY ALGUN MENSAJE DE ERROR, AVISAR E IMPEDIR
          if(data.json() != null){
            this.mensajeErrorFormAlta = data.json();
            return;
          }
          this.formAgregar.reset();
          this.TraerPersonas();
          this.MostrarFormulario();
        });
    }
  }
}