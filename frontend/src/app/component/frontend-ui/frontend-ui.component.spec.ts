import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendUIComponent } from './frontend-ui.component';

describe('FrontendUIComponent', () => {
  let component: FrontendUIComponent;
  let fixture: ComponentFixture<FrontendUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
