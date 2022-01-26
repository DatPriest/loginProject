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
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NDMyMDc1MDksImlhdCI6MTY0MzE5MzEwOSwianRpIjoiOGM1MTNhOGUtYWUwNy00ZWMzLTk4OWUtY2RlZGY0NDU0OTAwIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIxNmQyOTgwYy0wZWZkLTQ2YjItOGE3OS0zNDdmOWY2YTA5MmUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.Bv97fzIphVMLMFQdTAMMCeqw6_PrF6S1JNF4oTK56-kA7Rj0kr4Rf69x2A1PSKZ_u4XVGy4vox91ywMzafJx7MHwqS4PRiFf1mwfshBzylTgjWya9t7FnbMynQdDJSyv5JDpvJZJplWX5ubmLR5ec46EuFLcV-GibsWGyf8E72LgtIUF3pg7BIjuKJ817haNh66t5OSiMzaI2eJLN8xMAikF01Ccmufe17u6WIUlg0abUvgH_6MMkfQJ04wRY7o9pfZYVQL6C0c98vk8RFTUHaXWygPTNaCQYRokOEO8RTBjSEJfCcm0rGErl-sClvuZ6k3JejQuRyMA-pu8zUta0w';
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
