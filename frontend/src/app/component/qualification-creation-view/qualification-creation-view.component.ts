import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import { QualificationService } from 'src/app/service/qualification/qualification.service';
import { Qualification } from 'src/app/model/Qualification';

@Component({
  selector: 'app-qualification-creation-view',
  templateUrl: './qualification-creation-view.component.html',
  styleUrls: ['./qualification-creation-view.component.css']
})
export class QualificationCreationViewComponent implements OnInit {

  designation : string;
  constructor(
    private authenticationService: AuthenticationService,
    public router: Router,
    public app: AppComponent,
    private qualificationService : QualificationService
    ) {
    this.app.header = 2;
    if (this.isAuth)
      console.log(`user: ${this.app.user?.email}`);

  }
  ngOnInit(): void {
  }

  isAuth(): boolean {
    return this.authenticationService.isLoggedIn("qualification/new");
  }

  logout() {
    this.authenticationService.logout();
  }
  saveQualification() {
    console.log(this.app.user);
    this.qualificationService.postQualification(new Qualification(this.designation)).subscribe(qData => {
      this.router.navigate(["qualification"])
    })
  }

}
