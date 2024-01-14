import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  http = inject(HttpClient);
  users: any[] = [];

  ngOnInit(): void {
    this.fetchUsers();
  }
  // https://jsonplaceholder.typicode.com/users http://localhost:8080/ShopBookPTD/users
  fetchUsers() {
    this.http.get('http://localhost:3000/users').subscribe((users: any) => {
      this.users = users;
    });
  }
}
