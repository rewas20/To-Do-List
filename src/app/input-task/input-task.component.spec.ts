import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTaskComponent } from './input-task.component';

describe('InputTaskComponent', () => {
  let component: InputTaskComponent;
  let fixture: ComponentFixture<InputTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTaskComponent]
    });
    fixture = TestBed.createComponent(InputTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
