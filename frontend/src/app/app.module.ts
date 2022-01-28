import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginViewComponent } from './component/login-view/login-view.component';
import { EmployeeViewComponent } from './component/employee-view/employee-view.component';
import { EmployeeDetailViewComponent } from './component/employee-detail-view/employee-detail-view.component';
import { EmployeeCreationViewComponent } from './component/employee-creation-view/employee-creation-view.component';
import { QualificationViewComponent } from './component/qualification-view/qualification-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    EmployeeViewComponent,
    EmployeeDetailViewComponent,
    EmployeeCreationViewComponent,
    QualificationViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
