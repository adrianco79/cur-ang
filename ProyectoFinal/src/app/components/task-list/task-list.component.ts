import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from '../../interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  
  // TODO: Reformular como una lista de tareas
task1:ITask={
  title:'Task 1',
  description:'Tarea de ejemplo',
  completed:false,
  level:Levels.Info,

}

task2:ITask={
  title:'Task 2',
  description:'Tarea de ejemplo',
  completed:true,
  level:Levels.Urgent,

}

constructor(){}

deleteTask(task:ITask){
  alert( "tarea eliminada")

}

ngOnInit(): void {
  throw new Error('Method not implemented.');
}

}
