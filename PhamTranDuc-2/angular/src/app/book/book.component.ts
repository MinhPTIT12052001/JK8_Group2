import { Component } from '@angular/core';
import { MenubarAdminComponent } from '../menubar-admin/menubar-admin.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [MenubarAdminComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {}
