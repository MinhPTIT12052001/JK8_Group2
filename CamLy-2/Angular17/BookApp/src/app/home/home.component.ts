import { Component, OnInit } from '@angular/core';
import { HttpServerServiceService } from '../Service/http-server-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  bookList:any;
  constructor(private httpService: HttpServerServiceService){
    this.bookList=[];
  }

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList(){
    this.httpService.getBookList().subscribe((result: Product[]) => {
      this.bookList = result;
    })
  }
}
