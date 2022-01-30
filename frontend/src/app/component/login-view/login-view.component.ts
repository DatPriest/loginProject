import { Component, OnInit } from '@angular/core';
import {Users} from "../../model/Users";
import {LoginDataService} from "../../service/login-data.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {AuthenticationService} from "../../service/authentication/authentication.service";


@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  User : User;
  form : FormGroup;
  signupForm!:FormGroup

  constructor(private authenticationService: AuthenticationService, private loginDataService: LoginDataService, private router : Router, private http: HttpClient,private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      name: '',
      password: ''

    });
    //this.User = new Users(null, null, null);

  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[''],
      password:['']})
  }
  onSubmit(signInForm: NgForm){
    console.log(signInForm.value);
    const signInData = new Users(signInForm.value.email, signInForm.value.password);
    this.authenticationService.authenticate(signInData);
  }
  /*save() {
    this.loginDataService.registerUser(this.User);
  }*/
  /*
  register() : void {
    this.http.post('http://localhost:8000/api/register',{}).subscribe(() =>this.router.navigate(['/register']));
  }*/
  //change(event) {alert(event.target.value);}


}
