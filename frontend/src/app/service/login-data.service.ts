import { Injectable } from '@angular/core';
import { Users } from "../model/Users";

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  Users: Users[] = [];
  constructor() {
    this.Users.push(new Users(1,'haneef','123'));

  }
  registerUser(User : Users){
    this.Users.push(User);
    alert("successfully registered")
  }


}
