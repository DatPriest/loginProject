import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-qualification-creation-view',
  templateUrl: './qualification-creation-view.component.html',
  styleUrls: ['./qualification-creation-view.component.css']
})
export class QualificationCreationViewComponent implements OnInit {

  constructor(private authentifcationservice: AuthenticationService, public router: Router, public app: AppComponent) {
    this.app.header = 2;
  }

  isAuth(): boolean{
    return this.authentifcationservice.isAuthenticated;
  }

  logout(){
    this.authentifcationservice.logout();
  }
  toEmployee(){
    this.router.navigate(['employee']);
  }

  ngOnInit(): void {
  }

}
