import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-qualification-creation-view',
  templateUrl: './qualification-creation-view.component.html',
  styleUrls: ['./qualification-creation-view.component.css']
})
export class QualificationCreationViewComponent implements OnInit {

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

  saveQualification(): void {
    this.app.index = 4;
  }

  cancelQualification(): void {
    this.app.index = 4;
  }

  ngOnInit(): void {
  }

}
