import { Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'order',
    title: 'order',
    component: OrderComponent,
  },
  {
    path: 'order-confirm',
    title: 'Confirm Order',
    component: OrderConfirmComponent,
  },

  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent,
  },
  {
    path: 'admin',
    title: 'ADMIN - MANAGER',
    component: AdminComponent,
  },
  {
    path: 'product-detail/:id',
    title: 'ProductDetail',
    component: DetailProductComponent,
  },
  {
    path: 'cart',
    title: 'Cart',
    component: CartComponent,
  },
  //   {
  //     path: 'contact',
  //     title: 'Contact',
  //     component: ContactComponent,
  //     canActivate: [
  //       () => {
  //         return false;
  //       },
  //     ],
  //   },
  //   {
  //     path: 'login',
  //     title: 'Login',
  //     component: LoginComponent,
  //   },
  //   {
  //     path: 'home',
  //     component: HomeComponent,
  //   },
  //   {
  //     path: 'admin',
  //     component: AdminManagerComponent,
  //     // canActivate: [
  //     //   () => {
  //     //     return false;
  //     //   },
  //     // ],
  //   },
  //   {
  //     path: 'admin/users',
  //     title: 'Admin - Users',
  //     component: UserComponent,
  //   },
  //   {
  //     path: 'admin/list-book',
  //     title: 'Admin - Books',
  //     component: BookComponent,
  //   },
  //   {
  //     path: 'admin/list-user',
  //     title: 'Admin - Users',
  //     component: UserComponent,
  //   },
  {
    path: '**',
    title: '404 - Page Not Found',
    component: PageNotFoundComponent,
  },
];
