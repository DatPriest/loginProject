import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationDetailViewComponent } from './qualification-detail-view.component';

describe('QualificationDetailViewComponent', () => {
  let component: QualificationDetailViewComponent;
  let fixture: ComponentFixture<QualificationDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
