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
    this.bearerToken = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NDM0ODU2ODUsImlhdCI6MTY0MzQ3MTI4NSwianRpIjoiYjk5YTk1YzctMmI5OS00NTA1LWJhZTItOTgxNzVlNzE5MmFlIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI2OTQxMzY2YS1hMDRiLTQ4ZTctOTg0MS1hNzY2NzZlNGMxYzYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.PhkjpJQZK_12GlSZ-NPZTpcZ1x9GtAnBw97O1sKTb76sHLqtDgRVUSRHECvxxOq0TCU_vKMrT_Jvsv1M5cyXjJ4QU3_pi0Pl3Sc6ld5VSqu9HaYdUIlztYcte8Ru0vZmuhhFQ48HHX3hojdNVAAVtJIdHNghf4k2KHnjlzJ_JPWyEZTEXukXwAoOcXE0Xav3v5gB03Fe3M8O7b1vRop_AigLyKQ6OYcqgnhnNGc5Tt3XanyQUNa3v8ahOAKUNsoVruknnk_rGKhOeu54Q5LialqdNo9vVzUYyWpLyTI_slilw-boFDoy67eU6H0t-NXzj96Xd9mbu5irQScFibuURQ"

  }
}


/*POST http://keycloak.szut.dev/auth/realms/szut/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=password&client_id=employee-management-service&username=user&password=test
*/
