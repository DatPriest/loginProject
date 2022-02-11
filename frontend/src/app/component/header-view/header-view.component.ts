import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.css']
})
export class HeaderViewComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, public router: Router, public app: AppComponent) {}

  logout(){
    this.authenticationService.logout();
  }

  isAuth(): boolean{
    return this.authenticationService.isLoggedIn("qualification/new");
  }

  ngOnInit(): void {
  }

}
