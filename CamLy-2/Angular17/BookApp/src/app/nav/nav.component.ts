import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit{
  public isAdmin$: Observable<boolean> = new Observable<boolean>;
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.isAdmin$ = this.authService.isAdmin();
  }

  public logout(): void{
    this.authService.logout();
  }
}
