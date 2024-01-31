import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menubar-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menubar-admin.component.html',
  styleUrl: './menubar-admin.component.scss',
})
export class MenubarAdminComponent {}
