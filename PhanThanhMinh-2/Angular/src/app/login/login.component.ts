import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isloggedIn: Observable<boolean> = new Observable<boolean>
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  users: any;

  constructor(private auth: AuthService, private router: Router) {
  }
  public ngOnInit(): void {
    this.isloggedIn = this.auth.isLoggedIn();
    this.login();
  }
  
  public login() {

    if (this.validatePassword(this.password)) {
      this.errorMessage = 'Mật khẩu không hợp lệ.';
      return;
    }
    this.auth.getUser()
      .subscribe(res => {
        this.users = res;
        let user = this.users.find((user: any) => user.username === this.username);
               
        if (user.password !== this.password) {
          this.errorMessage = 'Sai mật khẩu.';
          return;
        }
        
        let role = user.role;
        if (role === 'admin') {
          this.router.navigate(['/admin']);
        } else if (role === 'user') {
          this.router.navigate(['/home']);
        } else {
          this.username = '';
          this.password = '';
        }
      });
  }
  
  private validatePassword(password: string): boolean {
    if (password.length <= 8) {
      return false;
    }
    
    if (!/^[A-Z]/.test(password)) {
      return false;
    }
    
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
      return false;
    }
    
    return true;
  }
}
