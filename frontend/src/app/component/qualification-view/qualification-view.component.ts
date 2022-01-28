import { Component, OnInit } from '@angular/core';
import {Qualification} from "../../model/Qualification";

@Component({
  selector: 'app-qualification-view',
  templateUrl: './qualification-view.component.html',
  styleUrls: ['./qualification-view.component.css']
})
export class QualificationViewComponent implements OnInit {

  qualifications$ : Qualification[] = [];
  constructor() {
    this.qualifications$.push(new Qualification(1,"C++"));
    this.qualifications$.push(new Qualification(2,"Rust"));
    this.qualifications$.push(new Qualification(3,"Javascript"));
    this.qualifications$.push(new Qualification(4,"Python"));
    this.qualifications$.push(new Qualification(5,"HTML"));
    this.qualifications$.push(new Qualification(6,"TypeScript"));
  }

  ngOnInit(): void {
  }

}
