import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { AuthenticationService} from "../../service/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employees : Employee[] = [];
  employees$ : Observable<Employee[]> = of([]);
  constructor(private employeeService: EmployeeService, private authentifcationservice: AuthenticationService, private router: Router) {
    if (this.authentifcationservice.isAuthenticated) {
      this.loadEmployees();
    }
  }

  loadEmployees() {
    console.log(this.employees$);
    this.employees$ = this.employeeService.getEmployees();
    this.employeeService.postEmployees();
    console.log(this.employees$);
  }

  isAuth(): boolean{
    return this.authentifcationservice.isAuthenticated;
  }

  logout(){
    this.authentifcationservice.logout();
  }

  deleteEmployee(): void{
    console.log('DELETE');
  }

  detailEmployee(): void {
    console.log('DETAIL');
  }

  ngOnInit(): void {
  }

}
