import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './Guard/auth.guard';

const routes: Routes = [
  // {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'about', component: AboutComponent, canActivate: [authGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
