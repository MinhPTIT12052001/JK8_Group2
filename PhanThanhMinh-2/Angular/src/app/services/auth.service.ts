import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): string{
    const users = require('http://localhost:3000/users');

    const user = users.find((user: any) => user.username === username);

    if (user){
      if (user.password === password){
        return user.role;
      }
      else {
        return 'invalid password';
      }
    }
    else {
      return 'user not found'
    }
  }
}
