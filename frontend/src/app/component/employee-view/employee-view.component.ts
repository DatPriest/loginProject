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
  searchTerm: string;
  employees$ : Observable<Employee[]> = of([]);
  constructor(private employeeService: EmployeeService, private authentifcationservice: AuthenticationService, public router: Router) {
    if (this.authentifcationservice.isAuthenticated) {
      this.loadEmployees();
    } else
    this.router.navigate(["/"])
  }

  loadEmployees() {
    //this.employeeService.postEmployees(new Employee(6,'aboush','haneef','wilhel','27753','del','32432'));
    this.employees$ = this.employeeService.getEmployees();
     //this.employees.forEach(value => this.employeeService.getEmployees());

  }

  isAuth(): boolean{
    return this.authentifcationservice.isAuthenticated;
  }

  logout(){
    this.authentifcationservice.logout();
  }

  deleteEmployee(id:number): void {
    this.employeeService.deleteEmployee(id);

    setTimeout(()=>{
      this.loadEmployees();
    }, 1000);
  }

  detailEmployee(): void {
    this.router.navigate(['employee/detail']);
    this.employeeService.getEmployee(1);
    this.router.navigate(['employee']);
  }
  addEmployee(){
    this.router.navigate(['employee/new']);
  }


  ngOnInit(): void {
  }

}
