import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Qualification } from './model/Qualification';
import { BearerTokenHolderService } from './service/bearer-token-holder.service';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  constructor(
    private http: HttpClient,
    private bearerService : BearerTokenHolderService
  ) { }


  public getQualification() : Observable<Qualification[]> {
    console.log(`Loading Qualification...\n BearerToken: ${this.bearerService.bearer.access_token}`)
    return this.http.get<Qualification[]>('/backend/qualification', {
      headers : new HttpHeaders().append('Authorization', `Bearer ${this.bearerService.bearer.access_token}`).append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Loaded Qualifications .. Length: ${x.length}`)
    }), //catchError<Employee[], never>(this.handleError<Employee[]>("Employee", []))
    )
  }

  public postQualification(qualification : Qualification) {
    console.log("Trying to post data qualification")
    this.http.post<Qualification>('/backend/qualification', qualification, {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Post Qualification .. Qualification: ${JSON.stringify(x)}`)
    })).subscribe(data => console.log(data));
  }

  public deleteQualification(id : number) {
    console.log("Trying to delete qualification")
    this.http.delete(`/backend/qualification/${id}`, {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Deletes Qualification .. Length: ${x}`)
    })).subscribe(data => console.log(data));
  }

  public updateQualification(qualification : Qualification) {
    console.log("Trying to update qualification")
    this.http.put<Qualification>(`/backend/qualification/${qualification.id}`, JSON.stringify(qualification),  {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Updates Qualification .. Length: ${x}`)
    })).subscribe(data => console.log(data));
  }


  public handleError<T>(origin = "origin", result? : T) {
    //return (error: any) : Observable<T> => {
  }
}
