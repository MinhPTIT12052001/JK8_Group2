import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule,
    ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  isLogin: boolean = true;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    }
  get username() {
    return this.loginForm.controls['username'];
  }

  get password() {
    return this.loginForm.controls['password']
  } 
  
}
