import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent implements OnInit {

  @Input()
  nombre:string='Yo';

  constructor(){}

  ngOnInit(): void {
    // instrucciones previas a la renderizazion
    console.log("implementa Oninit")

  }

}
