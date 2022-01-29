import { Component, OnInit } from '@angular/core';
import {Users} from "../../model/Users";
import {LoginDataService} from "../../service/login-data.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  User : User;

  constructor(private loginDataService: LoginDataService, private router : Router, private http: HttpClient) {

    this.User = new Users(null,null,null);

  }

  ngOnInit(): void {
  }
  save() {
    this.loginDataService.registerUser(this.User);
  }
  register() : void {
    this.http.post('http://localhost:8000/api/register',{}).subscribe(() =>this.router.navigate(['/register']));
  }
  //change(event) {alert(event.target.value);}


}
