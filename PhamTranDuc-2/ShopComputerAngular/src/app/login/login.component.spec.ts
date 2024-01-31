import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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
  constructor(private _http: HttpClient, private router: Router) {}

  fetchDataFromApi(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.get<any>('http://localhost:3000/users').subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  ngOnInit(): void {
    this.login = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });

    this.fetchDataFromApi()
      .then((data) => {
        console.log('Data from API:', data);
        this.userData = data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  loginData() {
    const user = this.userData.find((a: any) => {
      return (
        a.username === this.login.value.username &&
        a.password === this.login.value.password
      );
    });

    if (user) {
      this.router.navigate(['admin']);
    } else {
      this.loginFailed = true;
    }
  }
}
