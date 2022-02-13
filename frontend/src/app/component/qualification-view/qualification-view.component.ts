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
  searchTerm: string;
  qualifications$ : Observable<Qualification[]> = of([]);
  counter : number;
  qualificationList : Selection[];

  constructor(
    private authenticationService: AuthenticationService,
    public router: Router,
    private qualificationService : QualificationService,
    public app : AppComponent
    ) {
    this.qualificationList = [];

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

    this.qualificationService.getQualifications().subscribe(qData => qData.forEach((v, i) => {
      this.qualificationList.push(new Selection(i, v, false));
    }));
  }

  detailQualification(qualification : Qualification) {
    this.router.navigate(['qualification/detail', qualification]);
  }

  deleteQualification(designation : string) {
    this.qualificationService.deleteQualification(designation);
    this.router.navigate(['qualification/detail']);
  }
  //deleteQualification() {
  //  console.log(`Deleting qualification: ${this.qualification.designation}`)
  //  if (confirm(`Are you sure to delete this Qualification with name ${this.qualification.designation}?`))
  //    this.qualificationService.deleteQualification(this.qualification.designation).subscribe(qData => {
  //      console.log(`Deleted Qualification with designation: ${qData.designation}`);
  //      this.router.navigate(['qualifications'])
  //    });
  //}
}

class Selection {

  constructor(public index : number, public qualification : Qualification, public checked : boolean) {}
}
