import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent {
  task: string = "";
  @Output() firedChild = new EventEmitter();

  setValue(value:any){
    this.task = value.target.value;
  }

  addTaskToArray(event:any){
    event.preventDefault();
    if(this.task.trim()!=""){
      this.firedChild.emit(this.task);
    }
    this.task ="";
  }
}
