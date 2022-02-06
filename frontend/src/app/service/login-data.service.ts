import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { BearerToken } from '../model/BearerToken';
import { User } from '../model/User';
import { BearerTokenHolderService } from './bearer-token-holder.service';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  private authUrl = "http://authproxy.szut.dev/";

  Users: User[] = [];
  constructor(private http: HttpClient, private bearerService: BearerTokenHolderService, private router : Router, private employeeService : EmployeeService) {
    this.Users.push(new User('haneef','123'));

  }
  registerUser(User : User){
    this.Users.push(User);
  }

  login (user: User) {
    const headers : HttpHeaders = new HttpHeaders(
    )
      .append("Content-Type", "application/x-www-form-urlencoded")


    console.log("starting bearer request")
    //const body = `grant_type=password&client_id=employee-management-service&username=${user.email}&password=${user.password}`;
    const body = `grant_type=password&client_id=employee-management-service&username=user&password=test`;
    this.http.post<BearerToken>(this.authUrl, body.toString(), {headers} )
    .pipe(tap({
      next: (x) => console.log(`Loaded BearerToken .. ${x.access_token}`)
    }),
    ).subscribe(data => {
      this.bearerService.bearer = data;
      this.router.navigate(['employee'])
    });
  }


}
