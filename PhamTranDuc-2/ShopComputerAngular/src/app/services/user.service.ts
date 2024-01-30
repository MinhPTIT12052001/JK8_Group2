import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrlRegister =
    'http://localhost:8080/ShopBookPTD/api/v1/users/register';
  private apiUrlLogin = 'http://localhost:8080/ShopBookPTD/api/v1/users/login';
  constructor(private http: HttpClient) {}
  register(data: any): Observable<any> {
    // const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http.post<any>(this.apiUrlRegister, data);
  }
  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrlLogin, data);
  }
}
