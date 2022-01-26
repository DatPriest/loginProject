import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginViewLightComponent } from './login-view-light.component';

describe('LoginViewLightComponent', () => {
  let component: LoginViewLightComponent;
  let fixture: ComponentFixture<LoginViewLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginViewLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginViewLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
