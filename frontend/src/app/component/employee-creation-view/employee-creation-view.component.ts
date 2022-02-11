import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {Router} from "@angular/router";
import { EmployeeService } from 'src/app/service/employee/employee.service';
import {Employee} from "../../model/Employee";
import {AppComponent} from "../../app.component";
import { QualificationSelectionComponent } from '../qualification-selection/qualification-selection.component';
import { QualificationService } from 'src/app/service/qualification/qualification.service';

@Component({
  selector: 'app-employee-creation-view',
  templateUrl: './employee-creation-view.component.html',
  styleUrls: ['./employee-creation-view.component.css']
})
export class EmployeeCreationViewComponent {
  lastname: string;
  firstname: string;
  street: string;
  postcode: string;
  city: string;
  phone: string;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private employeeService: EmployeeService,
    private app : AppComponent,
    private qualificationSelection : QualificationSelectionComponent,
    private qualificationService : QualificationService
    ) {
      this.app.header = 1;
     }

  isAuth(): boolean{
    return this.authenticationService.isLoggedIn("employee/new");
  }

  addEmployee() {
    this.employeeService.postEmployee(
      new Employee(
        0,
        this.lastname,
        this.firstname,
        this.street,
        this.postcode,
        this.city,
        this.phone)
      ).subscribe(data => console.log(data))
      this.employeeService.getEmployees().subscribe(_ => {
        this.router.navigate(['employee']);
      })
  }
  cancelNewEmployeeView() {
    setTimeout(()=>{
      this.router.navigate(['employee']);
    }, 1000);
  }


  ngOnInit(): void {
      this.qualificationSelection.qualificationSet = this.qualificationService.getQualifications()

  }

}
