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
    this.bearerToken = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NDMyMTQ1MjksImlhdCI6MTY0MzIwMDEyOSwianRpIjoiMzAzNTRjNDctMTA0Mi00ZDJlLWEyZmQtNDc2OTE3ZDI1Njk4IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI1MGUxNjU5MC1iYjllLTQzODctOTFhNy03MjQ0NWY0M2NjNTgiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.IYADNtdxpSbLobCTikjZET-orRN1pLhsq7-pzr33dSMSyapECrIdvtMB1EAgfC2x8h9auU4FKJs3FQ8iVBKV0mgqZ4ULS7tEZSFbHUXDqwB0gIuN4X6nq4Wz9KsaIbrAQZ_vbnd_1vCtzz8DyM4Ekp8-igxILjGMxdntl6lfzf1IBcQoPuBJhZzgD0iOu5YJluCZ37r2atBQZ5TYYpZYmkROjlzGqeKqxXOrrMOzzc14qjsnX7eBuC9E3ABHXM0vw6gt2zydjVt10Gi43feuLfhg92ARNBnlN17g02U1ihmIM4jeZOsEwL2tBSJzz1xKFe_AbnQfcJ2RIXLtE7oxYw"

  }
}


/*POST http://keycloak.szut.dev/auth/realms/szut/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=password&client_id=employee-management-service&username=user&password=test
*/
