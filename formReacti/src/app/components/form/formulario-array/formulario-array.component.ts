
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray } from '@angular/forms'

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrl: './formulario-array.component.css'
})
export class FormularioArrayComponent implements OnInit {

  miFormularioArray:FormGroup=new FormGroup({});

   constructor(private fb:FormBuilder){}


  //Metodo getter par obtener el FormArray de la lista de telefono
get telefonosFormularios():FormArray{
return this.miFormularioArray.get('telefonos') as FormArray
}


añadirTelefono(){
  //creamos un grupo telefonos

  const telefonoNuevo=this.fb.group({
    prefijo:'',
    numero:''
  })

  //Añadimos el grupo a la lista de telefonos

  this.telefonosFormularios.push(telefonoNuevo);

}


// metodo para eliminar telefonos

eliminarTelefono(index:number){
  this.telefonosFormularios.removeAt(index);
}


  ngOnInit(): void {

    this.miFormularioArray= this.fb.group({
      nombre:'',
      apellido:'',
      telefonos:this.fb.array([])// inicializamos vacios la lista de telefonos
    })

  }





}
