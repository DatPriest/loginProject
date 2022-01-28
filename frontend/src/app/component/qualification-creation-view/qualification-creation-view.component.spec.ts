import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationCreationViewComponent } from './qualification-creation-view.component';

describe('QualificationCreationViewComponent', () => {
  let component: QualificationCreationViewComponent;
  let fixture: ComponentFixture<QualificationCreationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationCreationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationCreationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
