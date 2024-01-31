import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { OrderComponent } from './components/order/order.component';
import { ChinhanhComponent } from './components/chinhanh/chinhanh.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { CarManagementComponent } from './components/car-management/car-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ChinhanhManagementComponent } from './components/chinhanh-management/chinhanh-management.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'footer', component:FooterComponent},
    {path: 'header', component:HeaderComponent},
    {path: 'chinhanh', component:ChinhanhComponent},
    {path: 'car', component: CarComponent},
    {path: 'cart', component: OrderComponent},
    {path: 'cart_details', component: OrderDetailComponent},
    {path: 'car_details', component: CarDetailComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'car_management', component: CarManagementComponent},
    {path: 'user_management', component: UserManagementComponent},
    {path: 'chinhanh_management', component: ChinhanhManagementComponent}
];
