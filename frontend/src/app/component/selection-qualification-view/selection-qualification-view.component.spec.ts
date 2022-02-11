import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionQualificationViewComponent } from './selection-qualification-view.component';

describe('SelectionQualificationViewComponent', () => {
  let component: SelectionQualificationViewComponent;
  let fixture: ComponentFixture<SelectionQualificationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionQualificationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionQualificationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
