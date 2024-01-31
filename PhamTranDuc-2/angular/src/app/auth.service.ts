import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  public logout(): void {
    console.log('Logout success !');
    this.router.navigate(['/login']);
  }
}
