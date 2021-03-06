import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../app.component";
import { User } from "../../model/User";
import { Router} from "@angular/router";
import { HttpClient} from "@angular/common/http";
import { FormBuilder, FormGroup, NgForm } from "@angular/forms";
import { BearerTokenHolderService } from 'src/app/service/bearer-token/bearer-token-holder.service';
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
    private authenticationService: AuthenticationService,
    private router : Router,
    private http: HttpClient,
    private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      name: '',
      password: ''

    });

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

  isAuth(): boolean{
    return this.authenticationService.isLoggedIn("qualification/new");
  }

}
