import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent {
  @Input() task: any;
  @Output() removeTaskFromChild = new EventEmitter();
  @Output() completeTaskFromChild = new EventEmitter();
  @Output() unCompleteTaskFromChild = new EventEmitter();

  removeTask(task:any){
    this.removeTaskFromChild.emit(task);
  }
  completeTask(task:any){
    this.completeTaskFromChild.emit(task);
  }
  unCompleteTask(task:any){
    this.unCompleteTaskFromChild.emit(task);
  }
}
