import { Injectable, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {Router} from "@angular/router";
import {BearerTokenHolderService} from "../bearer-token/bearer-token-holder.service";
import {AppComponent} from "../../app.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BearerToken } from 'src/app/model/BearerToken';
import {count, tap} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit{

  public readonly mockUser = new User('user', 'test');
  private readonly authUrl = "http://authproxy.szut.dev/";

  private isAuthenticated : boolean
  loginAttempt = 0;
  constructor(
    private router : Router,
    private bearerService: BearerTokenHolderService,
    private app: AppComponent,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.loadUserFromSession()
  }


  loadUserFromSession() : User {
    let localUser = localStorage.getItem("user");
    if (localUser != "undefined") {
      return (JSON.parse(localUser) as User);
    } else {
      return new User("", "");
    }
  }

  isLoggedIn(path : string) : boolean {
    let localUser = this.loadUserFromSession();
    //console.log(JSON.stringify(localUser.email));
    if (this.app.user?.email == localUser.email && localUser?.email != "") {
      return true;
    }
    else if (this.checkCredentials(localUser)) {
      //console.log(JSON.stringify(this.app.user))
      //console.log(JSON.stringify(localUser))
      this.login(localUser, path);
      return true;
    } else if (localUser?.email == "") {
      console.log("Setting user to new User")
      this.app.user = localUser;
      return false;
    }
    else {
      this.logout();
      return false;
    }
  }

  authenticate(signInData: User): boolean {
    console.log(signInData)
    if(this.checkCredentials(signInData)) {
      if(this.loginAttempt <= 2) {
        this.login(signInData);
        console.log("Tryed to login")
        return true;
      }
      else {
        this.app.loginFailed = "You are blocked";
        return false;
      }

    }
    else {
      if (this.loginAttempt < 2) {
        this.app.loginFailed = "This E-mail / Username or Password is incorrect";
        this.loginAttempt++
        return false;
      }
      else {
        this.app.loginFailed = "You are blocked for 2 min";
        console.log(this.app.loginFailed);
        this.loginAttempt++
        setTimeout(() => {                           // <<<---using ()=> syntax
          this.loginAttempt = 0;
        }, 120000);
        return false;
      }
    }
  }
  private checkCredentials (signInData : User): boolean {
    return (this.checkEmail(signInData.email) && this.checkPassword(signInData.password));
  }
  private checkEmail(email: string): boolean {
    return email === this.mockUser.getEmail();
  }
  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }

  logout() {
    localStorage.setItem("user", "undefined")
    this.router.navigate(['']);
  }

  login (user: User, path : string = undefined) {
    this.loginAttempt = 0;
    const headers: HttpHeaders = new HttpHeaders(
    ).append("Content-Type", "application/x-www-form-urlencoded");

    const body = `grant_type=password&client_id=employee-management-service&username=${user.email}&password=${user.password}`;
    this.http.post<BearerToken>(this.authUrl, body.toString(), {headers})
      .pipe(tap({
          next: (x) => console.log(`Loaded BearerToken .. ${x.access_token.substring(0, 5)}`),
        }),
      ).subscribe(data => {
      user.bearerToken = data;
      this.app.user = user;
      this.bearerService.bearer = data;
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Saved user to session");
      if (path == undefined) {
        console.log("Navigated to Employee")
        this.router.navigate(["employee"])

      } else if (path != undefined && this.router.url != "/" + path) {
        this.router.navigate([path]);
        console.log(this.router.url)
      }
    });
  }
}
