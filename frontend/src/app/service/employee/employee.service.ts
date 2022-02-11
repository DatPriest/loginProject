import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject, tap } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Qualification } from 'src/app/model/Qualification';
import { Employee } from '../../model/Employee';
import { BearerTokenHolderService } from '../bearer-token/bearer-token-holder.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees$: Subject<Employee[]> = new Subject<Employee[]>();
  constructor (
    private http: HttpClient,
    private bearerService : BearerTokenHolderService,
    private app : AppComponent
  ) {
  }

  public getEmployees() : Observable<Employee[]> {
    if (this.app.user == null || this.app.user == undefined) return null;
    console.log(`Loading Employees...\n BearerToken: ${this.bearerService.bearer?.access_token.substring(0, 5)}`)
    return this.http.get<Employee[]>('/backend/employees', {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer?.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Loaded Employee .. Length: ${x.length}`)
    }), catchError(this.handleError<Employee[]>("Employee", []))
    )
  }

  public getEmployeeById(id : number) : Observable<Employee> {
    if (this.app.user == null || this.app.user == undefined) return of();

    console.log(`Loading Employees...\n BearerToken: ${this.bearerService.bearer?.access_token.substring(0, 5)}`)
    return this.http.get<Employee>('/backend/employees/' + id, {
      headers : new HttpHeaders().append('Authorization', `Bearer ${this.bearerService.bearer?.access_token}`).append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Loaded Employee .. Employee: ${x}`)
    }), catchError(this.handleError<Employee>("Get Employee By Id"))
    )
  }

  public updateEmployee(employee : Employee) : Observable<Employee> {
    if (this.app.user == null || this.app.user == undefined) return of();

    return this.http.put<Employee>(`/backend/employees/${employee.id}`, JSON.stringify(employee),  {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer?.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Updates Employee .. Length: ${x}`)
    }), catchError(this.handleError<Employee>("Update Employee")));
  }

  public deleteEmployee(id : number) : Observable<Employee> {
    if (this.app.user == null || this.app.user == undefined) return of();

    return this.http.delete<Employee>(`/backend/employees/${id}`, {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer?.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Deletes Employee .. Length: ${x}`)
    }), catchError(this.handleError<Employee>("Update Employee")));
  }

  public postEmployee(employee : Employee) : Observable<Employee> {
    if (this.app.user == null || this.app.user == undefined) return of();

    console.log("Trying to post data employee")
    return this.http.post<Employee>('/backend/employees', employee, {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer?.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Post Employee .. ${x}`)
    }), catchError(this.handleError<Employee>("Post Employee ")));
  }

  public postQualificationToEmployeeId(id: number, designation: string) : Observable<Qualification> {
    if (this.app.user == null || this.app.user == undefined) return of();
    console.log("Trying to post data employee")
    return this.http.post<Qualification>(`/backend/employees/${id}/qualifications`, designation, {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer?.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Post Qualification to Employee .. ${x}`)
    }), catchError(this.handleError<Qualification>("Post Qualification to EmployeeId ")));
  }

  public getQualificationToEmployeeId(id: number) : Observable<Employee> {
    if (this.app.user == null || this.app.user == undefined) return of();
    console.log("Trying to post data employee")
    return this.http.get<Employee>(`/backend/employees/${id}/qualifications`, {
      headers : new HttpHeaders()
        .append('Authorization', `Bearer ${this.bearerService.bearer?.access_token}`)
        .append('Content-Type', `application/json`)
    }).pipe(
      tap({
        next: (x) => console.log(`Get Qualifications to Employee .. ${JSON.stringify(x)}`)
    }), catchError(this.handleError<Employee>("Get Qualification List to EmployeeId ")));
  }



  public handleError<T>(origin = "origin", result? : T) {
    return (error: any) : Observable<T> => {
      throw new Error(`Error: ${origin}, ${typeof(error)}`);
    }
  }
}
