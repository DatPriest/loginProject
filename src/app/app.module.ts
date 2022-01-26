import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeComponent } from './component/employee/employee.component';
import { Pool } from 'pg';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Pool
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
