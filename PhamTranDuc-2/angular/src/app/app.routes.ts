import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminManagerComponent } from './admin-manager/admin-manager.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';

export const routes: Routes = [
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
  },
  {
    path: '',
    title: 'ShopComputerPTD',
    component: HomeComponent,
  },
  {
    path: 'contact',
    title: 'Contact',
    component: ContactComponent,
    canActivate: [
      () => {
        return false;
      },
    ],
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminManagerComponent,
    // canActivate: [
    //   () => {
    //     return false;
    //   },
    // ],
  },
  {
    path: 'admin/users',
    title: 'Admin - Users',
    component: UserComponent,
  },
  {
    path: 'admin/list-book',
    title: 'Admin - Books',
    component: BookComponent,
  },
  {
    path: 'admin/list-user',
    title: 'Admin - Users',
    component: UserComponent,
  },
  {
    path: '**',
    title: '404 - Page Not Found',
    component: PageNotFoundComponent,
  },
];
