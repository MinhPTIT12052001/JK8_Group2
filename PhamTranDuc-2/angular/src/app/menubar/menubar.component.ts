import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
})
export class MenubarComponent {}
