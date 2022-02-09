import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject, tap } from 'rxjs';
import { Employee } from '../../model/Employee';
import { BearerTokenHolderService } from '../bearer-token/bearer-token-holder.service';
import { DatabaseConnectorService } from '../database/database-connector.service';
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
    return this.http.get<Employee[]>('/backend/employees', {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Loaded Employee .. Length: ${x.length}`)
    }), //catchError<Employee[], never>(this.handleError<Employee[]>("Employee", []))
    )
  }

  public getEmployee(id : number) : Observable<Employee> {

    console.log(`Loading Employees...\n BearerToken: ${this.bearerService.bearer.access_token}`)
    return this.http.get<Employee>('/backend/employees/' + id, {
      headers : new HttpHeaders().append('Authorization', `Bearer ${this.bearerService.bearer.access_token}`).append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Loaded Employee .. Employee: ${x}`)
    }), //catchError<Employee[], never>(this.handleError<Employee[]>("Employee", []))
    )
  }

  public postEmployees(employee : Employee) {
    console.log("Trying to post data employee")
    this.http.post<Employee>('/backend/employees', employee, {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Post Employee .. ${x}`)
    })
    ).subscribe(data => console.log(data));
  }


  public deleteEmployee(id : number) {
    console.log("Trying to delete employee")
    this.http.delete(`/backend/employees/${id}`, {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Deletes Employee .. Length: ${x}`)
    })).subscribe(data => console.log(data));
  }

  public updateEmployee(employee : Employee) {
    console.log("Trying to delete employee")
    this.http.put<Employee>(`/backend/employees/${employee.id}`, JSON.stringify(employee),  {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Updates Employee .. Length: ${x}`)
    })).subscribe(data => console.log(data));
  }


  public handleError<T>(origin = "origin", result? : T) {
    //return (error: any) : Observable<T> => {
  }
}
