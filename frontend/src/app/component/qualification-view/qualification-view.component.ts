import { Component, OnInit } from '@angular/core';
import {Qualification} from "../../model/Qualification";
import {AppComponent} from "../../app.component";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {Router} from "@angular/router";
import { Observable, of } from 'rxjs';
import { QualificationService } from 'src/app/qualification.service';

@Component({
  selector: 'app-qualification-view',
  templateUrl: './qualification-view.component.html',
  styleUrls: ['./qualification-view.component.css']
})
export class QualificationViewComponent implements OnInit {

  qualifications$ : Observable<Qualification[]> = of([]);
  constructor(
    private authentificationService: AuthenticationService,
    public router: Router,
    private qualificationService : QualificationService,
    private app : AppComponent
    ) {
    console.log(app.user?.email);
    this.qualifications$ = this.qualificationService.getQualification()
  }

  isAuth(): boolean{
    return this.authentificationService.isAuthenticated;
  }

  logout(){
    this.authentificationService.logout();
  }

  ngOnInit(): void {
  }

}
