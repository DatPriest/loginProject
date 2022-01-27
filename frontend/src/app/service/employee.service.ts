import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Employee } from '../model/Employee';
import { BearerTokenHolderService } from './bearer-token-holder.service';
import { DatabaseConnectorService } from './database-connector.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees$: Observable<Employee[]>;
  employee: Employee[ ] = [ ];

  constructor (
    private http: HttpClient,
    private bearerService : BearerTokenHolderService,
    private databaseService : DatabaseConnectorService
  ) {
    this.employees$ = of([]);
    if (this.bearerService.bearerToken.length > 1 ) {
      this.fetchData();
    }
   }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearerService.bearerToken}`)
    });
  }
}
