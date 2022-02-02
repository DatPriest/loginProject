import { Component, OnInit } from '@angular/core';
import {Qualification} from "../../model/Qualification";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-qualification-detail-view',
  templateUrl: './qualification-detail-view.component.html',
  styleUrls: ['./qualification-detail-view.component.css']
})
export class QualificationDetailViewComponent implements OnInit {

  qualifications$ : Qualification[] = [];
  constructor(private authentifcationservice: AuthenticationService, private router: Router) {
    this.qualifications$.push(new Qualification(1,"C++"));
    this.qualifications$.push(new Qualification(2,"Rust"));
    this.qualifications$.push(new Qualification(3,"Javascript"));
    this.qualifications$.push(new Qualification(4,"Python"));
    this.qualifications$.push(new Qualification(5,"HTML"));
    this.qualifications$.push(new Qualification(6,"TypeScript"));
  }

  isAuth(): boolean{
    return this.authentifcationservice.isAuthenticated;
  }

  logout(){
    this.authentifcationservice.logout();
  }

  ngOnInit(): void {
  }

}
