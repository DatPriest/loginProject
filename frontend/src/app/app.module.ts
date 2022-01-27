import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginViewComponent } from './component/login-view/login-view.component';
import { EmployeeViewComponent } from './component/employee-view/employee-view.component';
import { BearerTokenHolderService } from './service/bearer-token-holder.service';
import { EmployeeService } from './service/employee.service';
import { EmployeeDetailViewComponent } from './component/employee-detail-view/employee-detail-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    EmployeeViewComponent,
    EmployeeComponent,
    EmployeeDetailViewComponent
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
