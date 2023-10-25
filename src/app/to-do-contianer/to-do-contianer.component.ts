import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-contianer',
  templateUrl: './to-do-contianer.component.html',
  styleUrls: ['./to-do-contianer.component.css']
})
export class ToDoContianerComponent {
  todoList: Array<any> = [];

 addTodoTask(task:any){
  this.todoList.push({title:task,isCompleted:false});
 }
 removeTask(task:any){
  this.todoList.splice(this.todoList.indexOf(task),1);
 }
 completeTask(task:any){
  this.todoList[this.todoList.indexOf(task)].isCompleted = true;
 }
 unCompleteTask(task:any){
  this.todoList[this.todoList.indexOf(task)].isCompleted = false;
 }

}
