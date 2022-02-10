import { Component, NgModule, OnInit } from '@angular/core';
import {Qualification} from "../../model/Qualification";
import {AppComponent} from "../../app.component";
import {Router} from "@angular/router";
import { Observable, of } from 'rxjs';
import { QualificationService } from 'src/app/service/qualification/qualification.service';

@Component({
  selector: 'app-selection-qualification-view',
  templateUrl: './selection-qualification-view.component.html',
  styleUrls: ['./selection-qualification-view.component.css']
})
export class SelectionQualificationViewComponent implements OnInit {

  qualifications$ : Observable<Qualification[]> = of([]);
  constructor(
    public router: Router,
    private qualificationService : QualificationService,
    public app : AppComponent
    ) {
    console.log(app.user?.email);
    this.qualifications$ = this.qualificationService.getQualification()
  }

  createNewQualification(): boolean {
    return true;
  }

  ngOnInit(): void {
  }

}
