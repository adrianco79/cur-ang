import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'

// importamos reactive form

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrl: './formulario-anidado.component.css'
})
export class FormularioAnidadoComponent implements OnInit {

  miFormularioAnidado: FormGroup = new FormGroup({})

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
   //Agrupacion para telefonos
   const telefono= this.formBuilder.group(
    {
    prefijo:'',
    numero:''
   }
   )

   const telefonoMovil = this.formBuilder.group(
    {
      prefijo:'',
      numero:''
    }
   )

   /// Agrupacion del formulario

   this.miFormularioAnidado = this.formBuilder.group({
    fijo:telefono,
    movil:telefonoMovil
   })
  }

}
