import {Component, OnInit} from '@angular/core';
import { BearerTokenHolderService } from './service/bearer-token-holder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  index: number = 0;
  constructor(private bearer: BearerTokenHolderService) {

  }

  ngOnInit(): void {
  }

}
