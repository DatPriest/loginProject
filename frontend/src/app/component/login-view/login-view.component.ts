import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../app.component";
import { User } from "../../model/User";
import { Router} from "@angular/router";
import { HttpClient} from "@angular/common/http";
import { FormBuilder, FormGroup, NgForm } from "@angular/forms";
import { BearerTokenHolderService } from "../../service/bearer-token-holder.service";
import { AuthenticationService } from "../../service/authentication/authentication.service";


@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  form : FormGroup;
  signupForm!:FormGroup;

  constructor(
    public app: AppComponent,
    private kc: BearerTokenHolderService,
    private authenticationService: AuthenticationService,
    private router : Router,
    private http: HttpClient,
    private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      name: '',
      password: ''

    });

  }


  ErrorWindow() {
    if (this.authenticationService.isAuthenticated == false) {
      return true;
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
    this.authenticationService.login(signInData);
    this.app.user = signInData;

  }

}
