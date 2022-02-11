import { Component, NgModule, OnInit } from '@angular/core';
import {Qualification} from "../../model/Qualification";
import {AppComponent} from "../../app.component";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {Router} from "@angular/router";
import { Observable, of } from 'rxjs';
import { QualificationService } from 'src/app/service/qualification/qualification.service';


@Component({
  selector: 'app-qualification-view',
  templateUrl: './qualification-view.component.html',
  styleUrls: ['./qualification-view.component.css']
})
export class QualificationViewComponent implements OnInit {

  qualifications$ : Observable<Qualification[]> = of([]);
  counter : number;
  constructor(
    private authenticationService: AuthenticationService,
    public router: Router,
    private qualificationService : QualificationService,
    public app : AppComponent
    ) {
    this.counter = 0;

    this.app.header = 2;
    if (this.isAuth())
      this.qualifications$ = this.qualificationService.getQualifications()
  }

  isAuth(): boolean {
    return this.authenticationService.isLoggedIn("qualification");
  }

  addCounter() : number {
    this.counter++;
    return this.counter;
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.qualifications$ = this.qualificationService.getQualifications();
    });
  }

  detailQualification(qualification : Qualification) {
    this.router.navigate(['qualification/detail', qualification]);
  }

}
