import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoContianerComponent } from './to-do-contianer/to-do-contianer.component';
import { InputTaskComponent } from './input-task/input-task.component';
import { DisplayTaskComponent } from './display-task/display-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoContianerComponent,
    InputTaskComponent,
    DisplayTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
