import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FullComponent } from './layouts/full/full.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: HomeComponent },
=======
  { path: '', component: HomeComponent},
>>>>>>> 711f66f92ea7358148a8fc62c2dcb16dc60b2e5d
  {
    path: 'cafe',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/cafe/dashboard',
        pathMatch: 'full',
<<<<<<< HEAD
      },
      {
        path: '',
        loadChildren: () =>
          import('./material-component/material.module').then((m) => m.MaterialComponentsModule),
        canActivate: [RouteGuardService],
        data: {
          expectedRole: ['admin', 'user'],
        },
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [RouteGuardService],
        data: {
          expectedRole: ['admin', 'user'],
        },
      },
    ],
  },
  { path: '**', component: HomeComponent },
=======
     
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule),
          canActivate:[RouteGuardService],
          data: {
            expectedRole:['admin','user']
          },
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate:[RouteGuardService],
        data: {
          expectedRole:['admin','user']
        }
      }
    ]
  },
  { path: '**', component: HomeComponent }
>>>>>>> 711f66f92ea7358148a8fc62c2dcb16dc60b2e5d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
<<<<<<< HEAD
  exports: [RouterModule],
})
export class AppRoutingModule {}
=======
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> 711f66f92ea7358148a8fc62c2dcb16dc60b2e5d
