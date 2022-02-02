import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/Employee";
import {EmployeeService} from "../../service/employee.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-employee-detail-view',
  templateUrl: './employee-detail-view.component.html',
  styleUrls: ['./employee-detail-view.component.css']
})
export class EmployeeDetailViewComponent implements OnInit {

  employees$ : Employee[] = [];
  constructor(private employeeService: EmployeeService, private app: AppComponent) {
    this.employeeService.employees$.subscribe(data => this.employees$ = data);
    this.employees$.push(new Employee(1, "Bullwinkel", "Lukas", "Malerstraße 3", "28207", "Bremen", "015251888936"));
    this.employees$.push(new Employee(2, "Cwiertnia", "Leon", "Malerstraße 3", "28207", "Bremen", "01234567890"));
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

  backEmployee(): void {
    this.app.index = 1;
  }

  deleteEmployee(): void {
    this.app.index = 1;
  }

  detailViewEmployee(): void {

  }

  ngOnInit(): void {
  }
}
