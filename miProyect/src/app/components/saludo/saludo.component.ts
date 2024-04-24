import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent implements OnInit, OnChanges, OnDestroy {

  @Output() mensajeEmiter:EventEmitter<string>=new EventEmitter<string>();

  @Input()
  nombre:string='Yo';

  constructor(){}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('el componenete recibe cambios');
  }
  ngOnDestroy(): void {
    console.log("el componenete va a desaparece")
  }

  ngOnInit(): void {
    // instrucciones previas a la renderizazion
    console.log("implementa Oninit")

  }

  enviarMensajePadre():void {

    this.mensajeEmiter.emit('${this.nombre}')
  }
}
