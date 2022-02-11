import { Component, NgModule, OnInit } from '@angular/core';
import { Qualification } from "../../model/Qualification";
import { AppComponent } from "../../app.component";
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import { QualificationService } from 'src/app/service/qualification/qualification.service';
import { Employee } from 'src/app/model/Employee';

@Component({
  selector: 'app-selection-qualification-view',
  templateUrl: './selection-qualification-view.component.html',
  styleUrls: ['./selection-qualification-view.component.css']
})
export class SelectionQualificationViewComponent implements OnInit {

  qualificationList : Selection[];
  employee : Employee;
  constructor(
    private qualificationService : QualificationService

  ) {
    this.qualificationList = [];
   }
  count : number = 0;
  qualificationSet : Observable<Qualification[]> = of([]);
  createNewQualification(): boolean {
    return true;
  }

  ngOnInit(): void {
    this.qualificationService.getQualifications().subscribe(qData => qData.forEach((v, i) => {
      this.qualificationList.push(new Selection(i, v, false));
    }));
  }


}

class Selection {

  constructor(public index : number, public qualification : Qualification, public checked : boolean) {}
}

