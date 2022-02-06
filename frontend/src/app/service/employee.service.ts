import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject, tap } from 'rxjs';
import { Employee } from '../model/Employee';
import { BearerTokenHolderService } from './bearer-token-holder.service';
import { DatabaseConnectorService } from './database-connector.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees$: Subject<Employee[]> = new Subject<Employee[]>();
  constructor (
    private http: HttpClient,
    private bearerService : BearerTokenHolderService,
  ) {
  }

  public getEmployees() : Observable<Employee[]> {
    console.log(`Loading Employees...\n BearerToken: ${this.bearerService.bearer.access_token}`)
    return this.http.get<Employee[]>('/backend', {
      headers : new HttpHeaders().append('Authorization', `Bearer ${this.bearerService.bearer.access_token}`).append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Loaded Employee .. Length: ${x.length}`)
    }), //catchError<Employee[], never>(this.handleError<Employee[]>("Employee", []))
    )
  }

  public postEmployees() {
    console.log("Trying to post data employee")
    const body = JSON.stringify({  "lastName": "string",
    "firstName": "string",
    "street": "string",
    "postcode": "strin",
    "city": "string",
    "phone": "string"});
    this.http.post<Employee[]>('/backend', body, {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Post Employee .. Length: ${x.length}`)
    })).subscribe(data => console.log(data));
  }

  public handleError<T>(origin = "origin", result? : T) {
    //return (error: any) : Observable<T> => {
  }
}
