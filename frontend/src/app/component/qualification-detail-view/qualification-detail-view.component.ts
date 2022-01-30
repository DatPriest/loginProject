import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-qualification-detail-view',
  templateUrl: './qualification-detail-view.component.html',
  styleUrls: ['./qualification-detail-view.component.css']
})
export class QualificationDetailViewComponent implements OnInit {

  constructor(private app: AppComponent) { }

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
