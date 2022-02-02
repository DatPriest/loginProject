import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginViewComponent } from './component/login-view/login-view.component';
import { EmployeeViewComponent } from './component/employee-view/employee-view.component';
import { BearerTokenHolderService } from './service/bearer-token-holder.service';
import { EmployeeService } from './service/employee.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {QualificationViewComponent} from "./component/qualification-view/qualification-view.component";
import {EmployeeCreationViewComponent} from "./component/employee-creation-view/employee-creation-view.component";
import {EmployeeDetailViewComponent} from "./component/employee-detail-view/employee-detail-view.component";
import {
  QualificationCreationViewComponent
} from "./component/qualification-creation-view/qualification-creation-view.component";
import {
  QualificationDetailViewComponent
} from "./component/qualification-detail-view/qualification-detail-view.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    EmployeeViewComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '',component: LoginViewComponent},
      {path: 'employee', component:EmployeeViewComponent},
      {path: 'employee/new', component:EmployeeCreationViewComponent},
      {path: 'employee/detail', component:EmployeeDetailViewComponent},
      {path: 'qualification', component:QualificationViewComponent},
      {path: 'qualification/new', component:QualificationCreationViewComponent},
      {path: 'qualification/detail', component:QualificationDetailViewComponent}
    ])
  ],
  providers: [BearerTokenHolderService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
