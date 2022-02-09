import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { AuthenticationService } from "src/app/service/authentication/authentication.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employees : Employee[] = [];
  searchTerm: string;
  employees$ : Observable<Employee[]> = of([]);
  constructor(
    private employeeService: EmployeeService,
    private authenticationService: AuthenticationService,
    public router: Router,
    public app: AppComponent,
    public route : ActivatedRoute
  ) {
    this.app.header = 1;
    if (this.authenticationService.isLoggedIn("employee")) {
      console.log("Thats true")
      this.loadEmployees();
    } else {
      console.log("navigating to logout")
      this.router.navigate(["/"])

    }
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.loadEmployees();
    })
  }

  loadEmployees() {
    //this.employeeService.postEmployees(new Employee(6,'aboush','haneef','wilhel','27753','del','32432'));
    this.employees$ = this.employeeService.getEmployees();
     //this.employees.forEach(value => this.employeeService.getEmployees());

  }

  isAuth(): boolean{
    return this.authenticationService.isLoggedIn("employee");
  }

  logout(){
    this.authenticationService.logout();
  }

  deleteEmployee(id:number): void {
    this.employeeService.deleteEmployee(id).subscribe(eData => {
      console.log(`Employee got deleted: \n id: ${eData.id} \n name: ${eData.lastName}`)
    });

    setTimeout(()=>{
      this.loadEmployees();
    }, 1000);
  }

  detailEmployee(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe(data => this.router.navigate(['employee/detail', data]));
    //this.router.navigate(['employee']);
  }
  addEmployee() {
    this.router.navigate(['employee/new']);
  }




}
