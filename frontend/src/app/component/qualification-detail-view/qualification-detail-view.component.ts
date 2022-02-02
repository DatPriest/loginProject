import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";
import {Qualification} from "../../model/Qualification";

@Component({
  selector: 'app-qualification-detail-view',
  templateUrl: './qualification-detail-view.component.html',
  styleUrls: ['./qualification-detail-view.component.css']
})
export class QualificationDetailViewComponent implements OnInit {

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

  backQualification(): void {
    this.app.index = 1;
  }

  deleteQualification(): void {
    this.app.index = 1;
  }

  ngOnInit(): void {
  }

}
