import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  )

  constructor(private route: Router, private http: HttpClient) { }

  public logout(): void {
    this.loggedIn.next(false)
    this.route.navigate(['']);
  }
  // public login(): void {
  //   this.loggedIn.next(true)
  //   this.route.navigate(['/home'])
  // }

  public isLoggedIn(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }
  public getUser(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/users')
  }
}
