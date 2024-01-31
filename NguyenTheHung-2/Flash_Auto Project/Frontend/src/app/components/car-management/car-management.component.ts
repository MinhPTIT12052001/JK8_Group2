import { Component } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { RouterModule, Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-car-management',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './car-management.component.html',
  styleUrl: './car-management.component.css'
})
export class CarManagementComponent {

}
