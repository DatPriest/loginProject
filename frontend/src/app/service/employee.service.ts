import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { BearerToken } from '../model/BearerToken';
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
    private databaseService : DatabaseConnectorService
  ) {
    this.employees$;
    this.fetchData();
   }

  fetchData() {
    this.bearerService.bearerTokenObservable$.subscribe(data => {
      this.http.get<Employee[]>('https://hub.dummyapis.com/employee', {
        headers : new HttpHeaders()
        .set('Authorization', `Bearer ${data.access_token}`)
        .set('Content-Type', `application/json`)
      }).subscribe(data => {
        this.employees$.next(data)
      });
      console.log(data)
    });

  }
}
