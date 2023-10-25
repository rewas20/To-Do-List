import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoContianerComponent } from './to-do-contianer.component';

describe('ToDoContianerComponent', () => {
  let component: ToDoContianerComponent;
  let fixture: ComponentFixture<ToDoContianerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoContianerComponent]
    });
    fixture = TestBed.createComponent(ToDoContianerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
