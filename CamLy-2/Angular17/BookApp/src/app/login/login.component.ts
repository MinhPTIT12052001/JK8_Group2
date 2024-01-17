import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  public loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern(/^[A-Z]+[a-zA-Z0-9]{7}/)]]
  })

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router,){}

  get username(){
    return this.loginForm.controls['username'];
  }

  get password(){
    return this.loginForm.controls['password'];
  }

  loginUser(){
    const{username, password} = this.loginForm.value;
    this.authService.loginUser(username, password);
  }
}
