import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreationViewComponent } from './employee-creation-view.component';

describe('EmployeeCreationViewComponent', () => {
  let component: EmployeeCreationViewComponent;
  let fixture: ComponentFixture<EmployeeCreationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCreationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCreationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
