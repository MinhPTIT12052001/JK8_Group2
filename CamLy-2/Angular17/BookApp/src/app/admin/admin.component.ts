import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpServerServiceService } from '../Service/http-server-service.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{
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
