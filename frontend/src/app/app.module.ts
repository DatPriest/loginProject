import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeComponent } from './component/employee/employee.component';
import { LoginViewComponent } from './component/login-view/login-view.component';
import { EmployeeViewComponent } from './component/employee-view/employee-view.component';
import { BearerTokenHolderService } from './service/bearer-token-holder.service';
import { EmployeeService } from './service/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    EmployeeViewComponent,
    EmployeeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [BearerTokenHolderService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
