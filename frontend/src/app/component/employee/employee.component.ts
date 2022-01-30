import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, of, timeout } from 'rxjs';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees : Employee[] = [];
  constructor(public employeeService: EmployeeService) {
    //setInterval(() => this.getEmployees(), 15000);

  }

  ngOnInit(): void {
    this.getEmployees()
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
