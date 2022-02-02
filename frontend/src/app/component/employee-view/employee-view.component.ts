import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employees : Employee[] = [];
  employees$ : Observable<Employee[]> = of([]);

  constructor(private employeeService: EmployeeService, private app : AppComponent) {
    this.employees$ = employeeService.employees$;
  }
  isAuth(): boolean{
   return this.authentifcationservice.isAuthenticated;
  }
  logout(){
    this.authentifcationservice.logout();
  }


  menuEmployee(): void {
    this.app.index = 1;
  }

  menuQualification(): void {
    this.app.index = 4;
  }

  logout(): void {
    this.app.index = 0;
  }

  addEmployee(): void {
    this.app.index = 3;
  }

  detailViewEmployee(employee: Employee): void {
    this.app.index = 2;
    this.app.detailEmployeeId = employee.id;
  }

  ngOnInit(): void {
    this.employeeService.employees$.subscribe(data => {
      console.log(data);
      this.employees = data;
    })
  }

  getEmployees() {
    console.log("Loading Employees...")
    this.employeeService.employees$.subscribe(
      data => {
        this.employees = data;
        console.log(data);

    }, err => console.error(err))
  }
}

