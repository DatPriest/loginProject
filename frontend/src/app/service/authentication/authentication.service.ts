import { Injectable } from '@angular/core';
import {User} from "../../model/User";
import {Router} from "@angular/router";
import {BearerTokenHolderService} from "../bearer-token-holder.service";
import {AppComponent} from "../../app.component";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockeUser = new User('test@mail.com', '123');
  isAuthenticated = false;
  count = 0;
  constructor(private router : Router, private bearertoken: BearerTokenHolderService, private app: AppComponent) { }

  authenticate(signInData: User): boolean{
    if(this.checkCredentials(signInData)){
      if(this.count <= 2){
        this.isAuthenticated = true;
        this.count= 0;
        return true;
      }
      else {
        this.app.Loginfailed = "You are bloked";
        alert("You are bloked");
        return false;
      }

    }
    else{
      if (this.count < 2) {
        this.isAuthenticated = false;
        this.app.Loginfailed = "This E-mail / Username or Password is incorrect";
        alert("this E-mail, Username or Password is incorrect");
        this.count++
        return false;
      }
      else {
        this.app.Loginfailed = "You are bloked";
        alert("you are blocked");
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
}
