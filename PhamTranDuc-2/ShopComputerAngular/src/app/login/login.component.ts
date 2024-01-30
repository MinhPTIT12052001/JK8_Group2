import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  login: FormGroup | any;
  userData: any;
  loginFailed: boolean = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.login = new FormGroup({
      user_name: new FormControl(''),
      password: new FormControl(''),
    });
  }
  loginFunction() {
    debugger;
    this.userService.login(this.login.value).subscribe({
      next: (response: any) => {
        debugger;
        this.router.navigate(['/']);
      },
      complete: () => {
        debugger;
      },
      error: (error: any) => {
        console.log(this.login.value);
        console.log(error);
        alert(`Cannot login, error: ${error.error}`);
      },
    });
  }
}
