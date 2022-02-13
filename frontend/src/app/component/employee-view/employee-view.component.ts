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
  searchTerm: string;
  employeeID :number;
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
    this.employees$ = this.employeeService.getEmployees();
  }

  isAuth(): boolean{
    return this.authenticationService.isLoggedIn("employee");
  }

  deleteEmployee(id:number): void {
    if (confirm(`Are you sure to delete this Employee with id ${id}?`))
    this.employeeService.deleteEmployee(id).subscribe(eData => {
      console.log(`Employee got deleted: \n id: ${eData.id} \n name: ${eData.lastName}`)
      this.router.navigate(['employee'])
    });

    setTimeout(()=>{
      this.loadEmployees();
    }, 1000);
  }

  detailEmployee(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe(data => this.router.navigate(['employee/detail', data]));
  }

  addEmployee() {
    this.router.navigate(['employee/new']);
  }




}
