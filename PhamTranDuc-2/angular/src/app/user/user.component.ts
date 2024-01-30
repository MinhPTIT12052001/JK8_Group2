import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MenubarAdminComponent } from '../menubar-admin/menubar-admin.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, MenubarAdminComponent, HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  users: any[] = [];
  constructor(private _http: HttpClient) {}
  fetchDataUserFromApi(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.get<any>('http://localhost:8080/ShopBookPTD/users').subscribe(
        (res) => {
          resolve(res);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  ngOnInit(): void {
    this.fetchDataUserFromApi()
      .then((data) => {
        this.users = data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
}
