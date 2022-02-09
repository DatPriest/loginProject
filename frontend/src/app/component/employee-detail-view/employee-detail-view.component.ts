import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/Employee";
import {EmployeeService} from "../../service/employee/employee.service";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-employee-detail-view',
  templateUrl: './employee-detail-view.component.html',
  styleUrls: ['./employee-detail-view.component.css']
})
export class EmployeeDetailViewComponent implements OnInit {

  employees$ : Employee[] = [];
  editEmployee$ : Employee | undefined;
  constructor(private employeeService: EmployeeService, private authentifcationservice: AuthenticationService, public router: Router, public app: AppComponent) {
    this.app.header = 1;
  }

  isAuth(): boolean{
    return this.authentifcationservice.isAuthenticated;
  }

  logout(){
    this.authentifcationservice.logout();
  }

  editEmployee(): boolean {
    return false;
  }

  switchDarkMode(b: boolean) {
    if (b = false) {
      this.app.darkMode = false;
    } else {
      this.app.darkMode = true;
    }
  }

  deleteEmployee(): void {
    this.router.navigate(['employee']);
    this.employeeService.deleteEmployee(1);
  }

  ngOnInit(): void {
  }
}
