import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { AppComponent } from '../app.component';
import { DatabaseConnectorService } from './database-connector.service';

const url = "http://keycloak.szut.dev/auth/realms/szut/protocol/openid-connect/token";

@Injectable({
  providedIn: 'root'
})
export class BearerTokenHolderService {
  bearerToken : string = "";
  constructor(
    private http: HttpClient,
    private databaseService : DatabaseConnectorService
  ) {
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
    const body = { body : "grant_type=password&client_id=employee-management-service&username=user&password=test" };
    this.http.post("/bearer", body, {headers} )
    .subscribe(
      res => console.log('HTTP response', res.toString()),
    )
    console.error("CORS Fehler, später reworken")
    this.bearerToken = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NDMyOTIzNDcsImlhdCI6MTY0MzI3Nzk0NywianRpIjoiZTMyNTAxNmItNzQ4MS00YWViLTgxMjktMTVjOTc1ODY2OTEzIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIxNzliY2E1NC02Y2QyLTQ5ZDQtODdlZi0yMDlmYjM0ZmZlOTkiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.ePnWDRltJnERQgMXkQQyVkCSzNVOfh549tdG4H8RIk3diTWEhjOKfOP7jU26poEO96QyKK7RVHql_t0pL5O55rhKTxiep2pbEekGu6GQ7au4Edmk4aabPNqPdpRjRZ8dpRZ2ihgofUGaIoRNkuuAWs3XTUoB7ISANDjOWtzjV08hnX7LiEpRU_sAoUd5o5pb4j1umOLoIKhVvF5racP-qdDBlwcfagPELXjsLruKzafePNCDLFVscWJyiJPm8lM95KK9NEkpumwKkjeDpIs4eu1wKpEOfqCZ__42RMAyOcLeiZT8eKnDWYgLIbQ05n_cYZjbIHJa6zuBu8hs8lbzMg"

  }
}


/*POST http://keycloak.szut.dev/auth/realms/szut/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=password&client_id=employee-management-service&username=user&password=test
*/
