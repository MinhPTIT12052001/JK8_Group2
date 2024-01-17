import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class HttpServerServiceService {
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getBookList(): Observable<any>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}/books`);
  }
}
