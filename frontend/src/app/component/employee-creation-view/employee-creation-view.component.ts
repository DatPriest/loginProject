import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {Router} from "@angular/router";
import {EmployeeService} from "../../service/employee.service";
import {Employee} from "../../model/Employee";

@Component({
  selector: 'app-employee-creation-view',
  templateUrl: './employee-creation-view.component.html',
  styleUrls: ['./employee-creation-view.component.css']
})
export class EmployeeCreationViewComponent implements OnInit {
  lastname:string;
  firstname:string;
  street:string;
  postcode:string;
  city:string;
  phone:string;
  constructor(private authentifcationservice: AuthenticationService, private router: Router, private employeeservice:EmployeeService) { }

  isAuth(): boolean{
    return this.authentifcationservice.isAuthenticated;
  }

  logout(){
    this.authentifcationservice.logout();
  }
  addEmployee(){
    this.employeeservice.postEmployees(new Employee(0,this.lastname,this.firstname,this.street,this.postcode,this.city,this.phone));
    setTimeout(()=>{
      this.employeeservice.getEmployees();
      this.router.navigate(['employee']);
    }, 1000);
  }
  cancelNewEmployyView(){
    setTimeout(()=>{
      this.router.navigate(['employee']);
    }, 1000);
  }


  ngOnInit(): void {

  }

}
