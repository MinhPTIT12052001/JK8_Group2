import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent implements OnInit{

  public isLoggedIn : Observable<boolean> = new Observable<boolean>()
  constructor(private auth: AuthService) {
  }
  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
  }
  public logOut(){
    this.auth.logout();
  }

}
