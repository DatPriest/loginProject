import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";
import {User} from "../../model/User";
import {LoginDataService} from "../../service/login-data.service";
import { Router} from "@angular/router";
import { HttpClient} from "@angular/common/http";
import { FormBuilder, FormGroup, NgForm} from "@angular/forms";
import { BearerTokenHolderService} from "../../service/bearer-token-holder.service";
import { AuthenticationService } from "../../service/authentication/authentication.service";


@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  // constructor(private app: AppComponent) { }

  //  login(): void {
  //    this.app.index = 1;
  //  }
  // //
  //  register(): void {
  //    this.app.index = 1;
  //  }

  form : FormGroup;
  signupForm!:FormGroup;

  constructor(public app: AppComponent, private kc: BearerTokenHolderService,
    private authenticationService: AuthenticationService,
    private loginDataService: LoginDataService, private router : Router, private http: HttpClient, private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      name: '',
      password: ''

    });
    //this.User = new Users(null, null, null);

  }

  ErrorWindow() {
    if (this.authenticationService.isAuthenticated == false) {
      return true;
      console.log(this.app.Loginfailed);
    } else {
      return false;
    }
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[''],
      password:['']})
  }
  onSubmit(signInForm: NgForm){
    console.log(signInForm.value);
    const signInData = new User(signInForm.value.email, signInForm.value.password);
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
