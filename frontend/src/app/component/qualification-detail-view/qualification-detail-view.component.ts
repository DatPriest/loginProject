import { Component, OnInit } from '@angular/core';
import {Qualification} from "../../model/Qualification";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import { QualificationService } from 'src/app/service/qualification/qualification.service';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/model/Employee';

@Component({
  selector: 'app-qualification-detail-view',
  templateUrl: './qualification-detail-view.component.html',
  styleUrls: ['./qualification-detail-view.component.css']
})
export class QualificationDetailViewComponent implements OnInit {

  qualification : Qualification;
  employees : Observable<Employee[]> = of([])
  constructor(
    private authenticationService: AuthenticationService,
    public router: Router,
    public app: AppComponent,
    private route: ActivatedRoute,
    private qualificationService : QualificationService
    ) {
    this.app.header = 2;
  }

  isAuth(): boolean{
    return this.authenticationService.isLoggedIn("qualification/detail");
  }

  logout(){
    this.authenticationService.logout();
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.qualification = (data as Qualification);
      this.qualificationService.getEmployeesByDesignation(this.qualification.designation);
      console.log(`Loaded Qualification : ${this.qualification.designation}`);

    })
  }

  deleteQualification() {
    console.log(`Deleting qualification: ${this.qualification.designation}`)
    if (confirm(`Are you sure to delete this Qualification with name ${this.qualification.designation}?`))
      this.qualificationService.deleteQualification(this.qualification.designation).subscribe(qData => {
        console.log(`Deleted Qualification with designation: ${qData.designation}`);
        this.router.navigate(['qualifications'])
      });
  }

}
