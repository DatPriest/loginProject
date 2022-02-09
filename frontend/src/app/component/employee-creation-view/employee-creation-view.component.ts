import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {Router} from "@angular/router";
import { EmployeeService } from 'src/app/service/employee/employee.service';
import {Employee} from "../../model/Employee";
import {AppComponent} from "../../app.component";

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
    private authentifcationService: AuthenticationService,
    private router: Router,
    private employeeService: EmployeeService,
    private app : AppComponent) {
      this.app.header = 1;
     }

  isAuth(): boolean{
    return this.authentifcationService.isAuthenticated;
  }

  logout() {
    this.authentifcationService.logout();
  }
  addEmployee() {
    this.employeeService.postEmployees(
      new Employee(0,
        this.lastname,
        this.firstname,
        this.street,
        this.postcode,
        this.city,
        this.phone)
      );
      this.employeeService.getEmployees().subscribe(_ => {
        this.router.navigate(['employee']);
      })
  }
  cancelNewEmployyView() {
    setTimeout(()=>{
      this.router.navigate(['employee']);
    }, 1000);
  }


  ngOnInit(): void {

  }

}
