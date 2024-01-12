import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private auth: AuthService, private router: Router) {
  }
 async login() {
    const role = this.auth.login(this.username,this.password);
    if (role === 'user') {
     await this.router.navigate(['/home']);
    }else if (role === 'admin') {
      await this.router.navigate(['/admin']);
    } else if (role === 'invalid_password') {
      this.errorMessage = 'Invalid password';
    } else if (role === 'user_not_found') {
      this.errorMessage = 'User not found';
    }
  }
}
