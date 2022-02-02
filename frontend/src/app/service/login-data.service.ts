import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  Users: User[] = [];
  constructor() {
<<<<<<< HEAD
    this.Users.push(new User(1,'haneef','123'));

  }
  registerUser(User : User){
    this.Users.push(User);

=======
    //this.Users.push(new Users(1,'haneef','123'));
>>>>>>> a278e9f (registerWithlogin)

  }


}
