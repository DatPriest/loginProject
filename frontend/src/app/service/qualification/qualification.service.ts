import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Employee } from 'src/app/model/Employee';
import { Qualification } from '../../model/Qualification';
import { BearerTokenHolderService } from '../bearer-token/bearer-token-holder.service';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  constructor(
    private http: HttpClient,
    private bearerService : BearerTokenHolderService,
    private app : AppComponent
  ) { }


  public getQualifications() : Observable<Qualification[]> {
    if (this.app.user == null || this.app.user == undefined) {
      console.log(this.app.user)
      return of([]);
    }

    console.log(`Loading Qualification...\n BearerToken: ${this.bearerService.bearer?.access_token.substring(0, 5)}`)
    return this.http.get<Qualification[]>('/backend/qualifications', {
      headers : new HttpHeaders().append('Authorization', `Bearer ${this.bearerService.bearer?.access_token}`).append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Loaded Qualifications .. Length: ${x.length}`)
    }), catchError(this.handleError<Qualification[]>("Get Qualification List", []))
    )
  }


  public getEmployeesByDesignation(designation : string) : Observable<Employee[]> {
    if (this.app.user == null || this.app.user == undefined) return of([]);

    console.log(`Loading Employees from Qualification Designation...\n BearerToken: ${this.bearerService.bearer?.access_token.substring(0, 5)}`)
    return this.http.get<Employee[]>(`/backend/qualfication/${designation}/employees` , {
      headers : new HttpHeaders().append('Authorization', `Bearer ${this.bearerService.bearer?.access_token}`).append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Loaded Employees .. Count: ${x.length}`)
    }), catchError(this.handleError<Employee[]>("Get Employee By Designation"))
    )
  }

  public postQualification(qualification : Qualification) : Observable<Qualification> {
    if (this.app.user == null || this.app.user == undefined) return of();

    this.getQualifications().subscribe(qData => {
      qData.map(x => {
        if (qualification.designation == x.designation) {
          console.log("I found it");
        }
      })
    });
    console.log(`Trying to post data qualification with : ${this.bearerService.bearer?.access_token.substring(0, 5)}`)
    return this.http.post<Qualification>('/backend/qualifications', {"designation": qualification.designation}, {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer?.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Post Qualification .. Qualification: ${JSON.stringify(x)}`)
    }), catchError(this.handleError<Qualification>("Post Qualification")));
  }

  /**
   *
   * @param designation
   */
  public deleteQualification(designation : string) : Observable<Qualification> {
    if (this.app.user == null || this.app.user == undefined) return of();

    console.log("Trying to delete qualification")
    return this.http.delete(`/backend/qualifications`, {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer?.access_token}`)
        .append('Content-Type', `application/json`),
        body : {"designation" : designation}
    }).pipe(
      tap({
        next: (x) => console.log(`Deletes Qualification .. Length: ${x}`)
    }), catchError(this.handleError<Qualification>("Delete Qualification")))
  }

  public handleError<T>(origin = "origin", result? : T) {
    return (error: any) : Observable<T> => {
      throw new Error(`${origin}, ${error.constructor.name  }`);
    }
  }
}
