import {Component} from '@angular/core';
import {Employee} from "./model/Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NDMyODI5NzAsImlhdCI6MTY0MzI2ODU3MCwianRpIjoiODE0NzFiN2ItOWEwYS00MDYwLWI2YzctZjI2MDMwMDk1MGJkIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJkZDc5ZDY1OS0wOTk3LTQ2MWYtYmIyMy0zOWRhYTVhMDE3NjkiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.W8aF9a4lOg__GOtJfeeDHZZ7L1b5G4V4xIuPLuFyglk_oF-W_RhRZWzu5MQvtfMapKIMEF2JALqEVc6GOE8cJ05Fd7oqnble5ll8zT1DgzEBzgO3vUP0L5fbbateK2NDTTSERjt1N569h7Wgu8p3nseRt2lQOaMZ0ccW-24B73cZ_U1qWkSUkzmFh325-6fyWIchBMEIhxbujCgj8rqpaMez3-Q3UWx8ZinxmXMLHELlLmapI74cqPzQoucaYckrtBpYkVNuFXvZ1l3VJcdOsbTJBuQJaxPjwKNeliB9GokfGvt_P3pe2B-Z2pTNvUGxsdFjzQ1aTnadZGBGQNfydA';
  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient) {
    this.employees$ = of([]);
    this.fetchData();
  }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }
}
