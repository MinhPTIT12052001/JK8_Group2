import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:3000";

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private admin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private router:Router, private http:HttpClient) { }

  public logout(): void{
    console.log("Log out");
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
    
  }

  getUserByUsername(username: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?username=${username}`);

  }

  loginUser(username: string | null | undefined, password: string | null | undefined){
    console.log(username, password);
    this.getUserByUsername(username as string).subscribe(
      response => {
        if(response.length > 0 && response[0].password === password){
          // console.log(response[0].password);
          // console.log(response[0].role);
          this.loggedIn.next(true);
          sessionStorage.setItem('username', username as string);
          if(response[0].role === "admin"){
            this.admin.next(true);
            this.router.navigate(['/admin']);
          }
          else {
            this.admin.next(false);
            
          }
          this.router.navigate(['/home']);
        }
        else{
          alert("User không tồn tại");
        }
      } 
    )
  }

  public isLoggedIn(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  public isAdmin(): Observable<boolean>{
    return this.admin.asObservable();
  }

}
