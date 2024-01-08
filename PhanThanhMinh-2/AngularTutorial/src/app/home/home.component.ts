import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public name = 'Minh';
  public age = 45;
  constructor() {

  }
  public resetName() : void{
    console.log('resetName'); 
    this.name = '';
  }

  ngOnInit(): void {
   
  }

}
