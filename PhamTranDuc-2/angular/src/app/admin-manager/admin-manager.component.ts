import { Component } from '@angular/core';
import { MenubarAdminComponent } from '../menubar-admin/menubar-admin.component';

@Component({
  selector: 'app-admin-manager',
  standalone: true,
  imports: [MenubarAdminComponent],
  templateUrl: './admin-manager.component.html',
  styleUrl: './admin-manager.component.scss',
})
export class AdminManagerComponent {}
