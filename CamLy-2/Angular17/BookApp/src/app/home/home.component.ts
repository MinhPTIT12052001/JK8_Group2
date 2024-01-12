import { Component, OnInit } from '@angular/core';
import { HttpServerServiceService } from '../Service/http-server-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  bookList:any;
  constructor(private httpClient: HttpClient){
    this.bookList=[];
  }

  ngOnInit(): void {
    this.getBookList();
    
  }

  getBookList(){
    this.httpClient.get('http://localhost:3000/books').subscribe((result:any)=>{
      this.bookList=result;
    })
  }
}
