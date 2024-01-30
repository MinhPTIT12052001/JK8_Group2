import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CarInfo } from '../../models/carinfo';

@Component({
  selector: 'app-car-location',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './car-location.component.html',
  styleUrl: './car-location.component.css'
})
export class CarLocationComponent {
  @Input() carLocation!: CarInfo;
}
