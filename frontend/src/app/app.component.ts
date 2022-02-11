import {Component, OnInit} from '@angular/core';
import { Console } from 'console';
import { User } from './model/User';
import { AuthenticationService } from './service/authentication/authentication.service';
import { BearerTokenHolderService } from './service/bearer-token/bearer-token-holder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  loginFailed: string | undefined;
  user? : User;
  darkMode = true;
  header: number = 0;

  constructor(private bearer: BearerTokenHolderService) {
  }

  ngOnInit(): void {
    console.log("Reinitializing AppComponent");
  }
}
