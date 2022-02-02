import { Component, OnInit } from '@angular/core';
import {Qualification} from "../../model/Qualification";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-qualification-view',
  templateUrl: './qualification-view.component.html',
  styleUrls: ['./qualification-view.component.css']
})
export class QualificationViewComponent implements OnInit {

  qualifications$ : Qualification[] = [];
  constructor(private app: AppComponent) {
    this.qualifications$.push(new Qualification(1,"C++"));
    this.qualifications$.push(new Qualification(2,"Rust"));
    this.qualifications$.push(new Qualification(3,"Javascript"));
    this.qualifications$.push(new Qualification(4,"Python"));
    this.qualifications$.push(new Qualification(5,"HTML"));
    this.qualifications$.push(new Qualification(6,"TypeScript"));
  }

  menuEmployee(): void {
    this.app.index = 1;
  }

  menuQualification(): void {
    this.app.index = 4;
  }

  logout(): void {
    this.app.index = 0;
  }

  addQualification(): void {
    this.app.index = 5;
  }

  detailQualification(qualification: Qualification): void {
    this.app.index = 6;
    this.app.detailQualification = qualification.id;
  }

  ngOnInit(): void {
  }

}
