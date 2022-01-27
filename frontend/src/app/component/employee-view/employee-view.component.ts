import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employees : Employee[] = [];
  employees$ : Observable<Employee[]> = of([]);

  employees$ : Employee[] = [];
  constructor(private employeeService: EmployeeService) {
    this.employeeService.employees$.subscribe(data => this.employees$ = data);
  }

  constructor(private employeeService: EmployeeService) {
    this.employees$ = employeeService.employees$;
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

