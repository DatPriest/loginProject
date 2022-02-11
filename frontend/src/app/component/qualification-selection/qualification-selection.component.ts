import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/model/Employee';
import { Qualification } from 'src/app/model/Qualification';
import { QualificationService } from 'src/app/service/qualification/qualification.service';

@Component({
  selector: 'app-qualification-selection',
  templateUrl: './qualification-selection.component.html',
  styleUrls: ['./qualification-selection.component.css']
})
export class QualificationSelectionComponent implements OnInit {

  qualificationList : Selection[];
  employee : Employee;
  constructor(
    private qualificationService : QualificationService

  ) {
    this.qualificationList = [];
   }
  count : number = 0;
  qualificationSet : Observable<Qualification[]> = of([]);

  ngOnInit(): void {
    this.qualificationService.getQualifications().subscribe(qData => qData.forEach((v, i) => {
      this.qualificationList.push(new Selection(i, v, false));
    }));
  }

  saveSelection() {

  }

}


class Selection {

  constructor(public index : number, public qualification : Qualification, public checked : boolean) {}
}
