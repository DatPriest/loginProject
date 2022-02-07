import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { AuthenticationService} from "src/app/service/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employees : Employee[] = [];
  employees$ : Observable<Employee[]> = of([]);
  constructor(private employeeService: EmployeeService, private authentifcationservice: AuthenticationService, public router: Router) {
    if (this.authentifcationservice.isAuthenticated) {
      this.loadEmployees();
    } else
    this.router.navigate(["/"])
  }

  loadEmployees() {
    this.employees$ = this.employeeService.getEmployees();
  }

  isAuth(): boolean{
    return this.authentifcationservice.isAuthenticated;
  }

  logout(){
    this.authentifcationservice.logout();
  }

  deleteEmployee(): void {
    this.employeeService.deleteEmployee(1);
  }

  detailEmployee(): void {
    this.employeeService.getEmployee(1);
  }

  ngOnInit(): void {
  }

}
