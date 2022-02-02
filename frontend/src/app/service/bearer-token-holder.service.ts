import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { AppComponent } from '../app.component';
import { BearerToken } from '../../../../server/src/model/BearerToken';
import { DatabaseConnectorService } from './database-connector.service';

const url = "http://keycloak.szut.dev/auth/realms/szut/protocol/openid-connect/token";

@Injectable({
  providedIn: 'root'
})
export class BearerTokenHolderService {
  bearerTokenObservable$ : Observable<BearerToken>;
  constructor(
    private http: HttpClient,
    private databaseService : DatabaseConnectorService
  ) {
    this.bearerTokenObservable$ = of();
    this.getToken();
  }

  public getToken() {
    const headers : HttpHeaders = new HttpHeaders(
)
    .append("Content-Type", "application/x-www-form-urlencoded")
    .append("Access-Control-Allow-Origin", "*")
    .append("Access-Control-Allow-Headers", "x-requested-with, Content-Type")
    .append("Authorization", "grant_type=password&client_id=employee-management-service&username=user&password=test")


    console.log("starting bearer request")
    const body = "grant_type=password&client_id=employee-management-service&username=user&password=test";
    this.bearerTokenObservable$ = this.http.post<BearerToken>("/bearer", body, {headers} );

  }
}


/*POST http://keycloak.szut.dev/auth/realms/szut/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=password&client_id=employee-management-service&username=user&password=test
*/
