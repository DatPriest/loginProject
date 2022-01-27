import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees : Employee[] = [];
  constructor(private employeeService: EmployeeService) {
    this.employeeService.employees$.subscribe(data => this.employees = data);
    console.log(this.employees);
  }

  ngOnInit(): void {
  }

}
