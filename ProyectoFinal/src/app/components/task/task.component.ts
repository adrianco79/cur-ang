import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

deletetask() {
console.log("Eliminar tarea", this.task?.title);
this.delete.emit(this.task);// notificamos al componenete superior la tarea a eliminar
}
  @Input() task: ITask | undefined;
  @Output() delete:EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
