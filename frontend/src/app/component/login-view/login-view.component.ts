import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor(private app: AppComponent) { }

  login(): void {
    this.app.index = 1;
  }

  register(): void {
    this.app.index = 1;
  }

  ngOnInit(): void {
  }

}
