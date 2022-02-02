import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  Users: User[] = [];
  constructor() {
    this.Users.push(new User('haneef','123'));

  }
  registerUser(User : User){
    this.Users.push(User);


  }


}
