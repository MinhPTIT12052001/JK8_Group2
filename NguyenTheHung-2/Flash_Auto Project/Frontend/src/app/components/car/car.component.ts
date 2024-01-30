import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { CarLocationComponent } from '../car-location/car-location.component';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CarInfo } from '../../models/carinfo';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CarLocationComponent, CommonModule, RouterModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

  constructor(private router: Router) { } 
  
  ngOnInit() { 
    this.router.events.subscribe((event) => { 
        if (!(event instanceof NavigationEnd)) { 
            return; 
        } 
        window.scrollTo(0, 0) 
    }); 
} 
 
  carLocation: CarInfo = {
    id: 1,
    car_code: 'VF9_VN001',
    name: 'VF9',
    price: 1419000000,
    sku_code: 'VF9VN1S7',
    car_model: 'SUV',
    photo: 'https://vinfastauto.com/themes/porto/img/homepage-v2/car/vf-9.webp',
    performance: 300,
    acceleration_time: 6.8,
    distance_traveled: 626,
    air_bag_number: 11,
    warranty_period: 10,
    seating_number: 7,
    date_added: '01/26/2024',
    quantity: 5,
    chinhanh_id: '1',
    nhanvien_id: '1',
  };


  // filterResults(text: string) {
  //   if (!text) {
  //     this.filteredLocationList = this.housingLocationList;
  //   }
  
  //   this.filteredLocationList = this.housingLocationList.filter(
  //     housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
  //   );
  // }
}
