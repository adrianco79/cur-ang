import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'miProyect';
  nombre:string='Adrian'


  recibirMensajedelHijo(evento:string){
    alert(evento)
  }
}
