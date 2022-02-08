import { Injectable } from '@angular/core';
import {User} from "../../model/User";
import {Router} from "@angular/router";
import {BearerTokenHolderService} from "../bearer-token-holder.service";
import {AppComponent} from "../../app.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BearerToken } from 'src/app/model/BearerToken';
import {count, tap} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockeUser = new User('user', 'test');
  private readonly authUrl = "http://authproxy.szut.dev/";

  isAuthenticated = false;
  count = 0;
  constructor(
    private router : Router,
    private bearerService: BearerTokenHolderService,
    private app: AppComponent,
    private http: HttpClient
    ) { }

  authenticate(signInData: User): boolean{
    if(this.checkCredentials(signInData)){
      if(this.count <= 2){
        this.isAuthenticated = true;
        this.count= 0;
        return true;
      }
      else {
        this.app.loginFailed = "You are blocked";
        console.log(this.app.loginFailed);
        //alert("You are bloked");
        return false;
      }

    }
    else{
      if (this.count < 2) {
        this.isAuthenticated = false;
        this.app.loginFailed = "This E-mail / Username or Password is incorrect";
        console.log(this.app.loginFailed);
        //alert("this E-mail, Username or Password is incorrect");
        this.count++
        return false;
      }
      else {
        this.app.loginFailed = "You are bloked for 2 min";
        console.log(this.app.loginFailed);
        this.count++
        setTimeout(()=>{                           // <<<---using ()=> syntax
          this.count = 0;
        }, 120000);
        //alert("you are blocked");
        return false;
      }
    }
  }
  private checkCredentials (signInData : User): boolean{
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword());
  }
  private checkEmail(email: string): boolean{
    return email === this.mockeUser.getEmail();
  }
  private checkPassword(password: string): boolean{
    return password === this.mockeUser.getPassword();
  }
  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  login (user: User) {
    if (this.isAuthenticated == true) {

    const headers: HttpHeaders = new HttpHeaders(
    ).append("Content-Type", "application/x-www-form-urlencoded");

    const body = `grant_type=password&client_id=employee-management-service&username=${user.email}&password=${user.password}`;
    this.http.post<BearerToken>(this.authUrl, body.toString(), {headers})
      .pipe(tap({
          next: (x) => console.log(`Loaded BearerToken .. ${x.access_token}`),
        }),
      ).subscribe(data => {
      this.bearerService.bearer = data;
      this.router.navigate(['employee'])
    });
  }
  }
}
