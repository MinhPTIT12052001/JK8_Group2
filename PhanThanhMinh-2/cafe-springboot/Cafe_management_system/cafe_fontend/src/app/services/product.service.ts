import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = enviroment.apiUrl;

  constructor(private http: HttpClient) {}

  add(data: FormData): Observable<any>{
    return this.http.post(this.url + '/product/add', data)
  }

<<<<<<< HEAD
  update(data: any): Observable<any>{
    return this.http.post(this.url + '/product/update', data, 
    // { headers: new HttpHeaders().set('Content-Type', 'application/json'),}
    );
=======
  update(data: any) {
    return this.http.post(this.url + '/product/update', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
>>>>>>> 711f66f92ea7358148a8fc62c2dcb16dc60b2e5d
  }
  getProducts() {
    return this.http.get(this.url + '/product/get');
  }

  updateStatus(data: any) {
    return this.http.post(this.url + '/product/updateStatus', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }
  delete(id: any) {
    return this.http.post(this.url + '/product/delete/' + id, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }
  getProductsByCategory(id: any) {
    return this.http.get(this.url + '/product/getByCategory/' + id);
  }
  getById(id: any) {
    return this.http.get(this.url + '/product/getById/' + id);
  }
}
