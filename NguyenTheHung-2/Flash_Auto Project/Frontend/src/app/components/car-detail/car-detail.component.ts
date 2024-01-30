import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent {
  constructor(private router: Router) { } 
  
  ngOnInit() { 
    this.router.events.subscribe((event) => { 
        if (!(event instanceof NavigationEnd)) { 
            return; 
        } 
        window.scrollTo(0, 0) 
    }); 
  }
}
