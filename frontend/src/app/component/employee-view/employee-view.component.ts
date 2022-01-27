import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/Employee";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  employees$ : Employee[] = [];
  constructor(private employeeService: EmployeeService) {
    this.employeeService.employees$.subscribe(data => this.employees$ = data);
    console.log(this.employees$);
  }

  ngOnInit(): void {
  }

}
