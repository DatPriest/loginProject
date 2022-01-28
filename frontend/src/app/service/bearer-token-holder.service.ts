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
    this.bearerToken = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NDM0MDI4NjYsImlhdCI6MTY0MzM4ODQ2NiwianRpIjoiZDA2MmFkMzktZGUzNi00N2NiLTkyMzktMjg3ODNlZTA1YmM4IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI5ZTRkYjAyYS03ODgzLTQ1NmYtOGE4Ny00NTg3NzJjOGNmY2EiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.Vpdk5npWCv2MIQTS_GgDhC0haZnRR76pyxLSRpg-kgzNi9WS10kNxTVKiQVT8b_tZ0_9ySgbZe6xaC18lgAtp7bQ5n9DYsQnu_1ZNlAoF3saeT-cl0S2Z50U_qSDSKKLlGUPJVndaiNqCpl8RWke8DD0f9DcPJ-519CXIHyUvATDJtGllysMh_X8KzMPxJE9FnYNZhOkE14KsNDbimkPWGXAHa8RUz1u0s4mmQt2IcJ67gr51hHgJLFr1khcIDd5Tlregh03SFbrCRuGkjZxAYNH6_7Rue06LQc06jukGJv2pbKbtQ4bF9D5si29WAopo4L_B8sNx34Jv-uDJZSjiw"

  }
}


/*POST http://keycloak.szut.dev/auth/realms/szut/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=password&client_id=employee-management-service&username=user&password=test
*/
