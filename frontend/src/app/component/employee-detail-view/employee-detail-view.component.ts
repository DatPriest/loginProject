import { Component, OnInit, ViewChild } from '@angular/core';
import {Employee} from "../../model/Employee";
import {EmployeeService} from "../../service/employee/employee.service";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import { Qualification } from 'src/app/model/Qualification';
import { Observable, of } from 'rxjs';
import { QualificationService } from 'src/app/service/qualification/qualification.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-detail-view',
  templateUrl: './employee-detail-view.component.html',
  styleUrls: ['./employee-detail-view.component.css']
})
export class EmployeeDetailViewComponent implements OnInit {

  count = 0;
  lastname = false;
  firstname = false;
  employee : Employee;
  editEmployee$ : Employee | undefined;
  employeeQualificationSkillset : Observable<Qualification[]> = of();
  qualificationSet : Observable<Qualification[]> = of([]);
  constructor(
    private employeeService: EmployeeService,
    private authenticationService: AuthenticationService,
    public router: Router,
    public app: AppComponent,
    public route: ActivatedRoute,
    public qualificationService : QualificationService) {
    this.app.header = 1;
  }

  isAuth(): boolean{
    return this.authenticationService.isLoggedIn("employee/detail");
  }

  editLastNameEmployee(): void {
     this.lastname = true;
  }
  toEditLastNameEmployee(): boolean {
    if (this.firstname == true) {
      this.firstname = false;
    }
    return this.lastname;
  }

  editFirstNameEmployee(): void {
    this.firstname = true;
  }
  toEditFirstNameEmployee(): boolean {
    if (this.lastname == true) {
      this.lastname = false;
    }
    return this.firstname;
  }

  deleteEmployee(): void {
    this.router.navigate(['employee']);
    this.employeeService.deleteEmployee(1);
  }

  markCheckBoxes(): void {
    ViewChild
  }

  ngOnInit(): void {
    this.route.params.subscribe(data =>  {
      console.log();
      this.employee = data as Employee;
      //this.employeeService.getQualificationToEmployeeId(this.employee.id).subscribe(employee => {
      //  this.employeeQualificationSkillset = of(employee.skillSet);
     // })
    });
  }
}
