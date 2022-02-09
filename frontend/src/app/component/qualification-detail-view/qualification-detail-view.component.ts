import { Component, OnInit } from '@angular/core';
import {Qualification} from "../../model/Qualification";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-qualification-detail-view',
  templateUrl: './qualification-detail-view.component.html',
  styleUrls: ['./qualification-detail-view.component.css']
})
export class QualificationDetailViewComponent implements OnInit {

  qualifications$ : Qualification[] = [];
  constructor(private authentifcationservice: AuthenticationService, public router: Router, public app: AppComponent) {
    this.app.header = 2;
  }

  isAuth(): boolean{
    return this.authentifcationservice.isAuthenticated;
  }
  toEmployee(){
    this.router.navigate(['employee']);
  }

  logout(){
    this.authentifcationservice.logout();
  }

  ngOnInit(): void {
  }

}
