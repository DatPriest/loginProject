import {Component, OnInit} from '@angular/core';
import { User } from './model/User';
import { BearerTokenHolderService } from './service/bearer-token-holder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  Loginfailed: string | undefined;
  user? : User;

  constructor(private bearer: BearerTokenHolderService) {
  }

  ngOnInit(): void {
  }
}
