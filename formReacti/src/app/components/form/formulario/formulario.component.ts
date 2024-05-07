import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup} from '@angular/forms'

//ejemplo basico de formulario reactivo

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent  implements OnInit{

  //Definimos nuestro formulario
  miFormulario:FormGroup | undefined;

  //inyectamos la clase formBuilder para poder construir el form
  constructor( private formBuilder:FormBuilder){
  }

  ngOnInit(): void {
   //Indicamos los campos del formulario
  this.miFormulario=this.formBuilder.group(
    {
        nombre:'',
        apellido:'',
        email:'',
        telefono:'',
        direccion:''
     }
  )
  //nos suscribimos a los cambios que ocurran en el formulario y lo mostramos por consola

  this.miFormulario.valueChanges.subscribe(console.log)
  }


}
