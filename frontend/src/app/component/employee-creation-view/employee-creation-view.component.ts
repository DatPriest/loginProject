import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-employee-creation-view',
  templateUrl: './employee-creation-view.component.html',
  styleUrls: ['./employee-creation-view.component.css']
})
export class EmployeeCreationViewComponent implements OnInit {

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

  saveEmployee(): void {
    this.app.index = 1;
  }

  backEmployee(): void {
    this.app.index = 1;
  }

  ngOnInit(): void {
  }

}
