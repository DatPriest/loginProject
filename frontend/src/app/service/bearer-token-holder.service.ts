import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { AppComponent } from '../app.component';
import { BearerToken } from '../model/BearerToken';
const url = "http://keycloak.szut.dev/auth/realms/szut/protocol/openid-connect/token";
@Injectable({
  providedIn: 'root'
})
export class BearerTokenHolderService {

  bearer: BearerToken = new BearerToken();

}


/*POST http://keycloak.szut.dev/auth/realms/szut/protocol/openid-connect/tokenContent-Type: application/x-www-form-urlencoded
grant_type=password&client_id=employee-management-service&username=user&password=test
*/


